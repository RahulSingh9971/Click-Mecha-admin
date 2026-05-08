@php
  $num1 = rand(1, 10);
  $num2 = rand(1, 10);
  session(['captcha_result' => $num1 + $num2]);
@endphp

<section class="bg-light">
  <div class="container-fluid">
    <div class="row align-items-center">
      <div class="col-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.2388446510067!2d76.88223901112326!3d28.68250107553585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0c77e6ec25a3%3A0x46a59d4a5e5d1547!2sAsha%20Bahadurgarh%20-%20Essel%20Group!5e0!3m2!1sen!2sin!4v1759310686865!5m2!1sen!2sin"
          class="w-100 rounded" height="400" style="border:0;" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </div>

  <div class="contact-container">
    <div class="contact-info">
      <h1>Get in touch!</h1>
      <p class="w-75 form-desc fw-light">Have questions or need assistance? Reach out to us for personalized support and expert advice tailored to your needs.</p>  

      <div class="d-flex align-items-center gap-4 flex-wrap">
        <div class="info-item contact-info">
          <img src="{{ asset('assets/images/Phone (1).svg') }}" alt="">
          <p class="text-start"><span class="fw-bold">Phone Number:</span> <br> <a class="text-decoration-none text-violet" href="tel:+91{{ get_contact_detail('phone') }}">+91-{{ get_contact_detail('phone') }}</a></p>
        </div>
        <div class="info-item contact-info">
          <img src="{{ asset('assets/images/Phone (2).svg') }}" height="70" width="70" alt="">
          <p class="text-start"><span class="fw-bold">Toll Free: </span> <br> <a class="text-decoration-none text-violet" href="tel:+91{{ get_contact_detail('toll_free') }}">{{ get_contact_detail('toll_free') }}</a></p>
        </div>
      </div>

      <div class="info-item contact-info">
        <img src="{{ asset('assets/images/location.svg') }}" height="70" width="70" alt="">
        <p class="text-start"><span class="fw-bold">Office Address: </span><br> <a class="text-decoration-none text-violet" href="https://www.google.com/maps/search/Sector+36,+Rohtak+Bypass,+Bahadurgarh+-Mattan-Beri+Rd,+Haryana+124507/@28.6752297,76.8862536,15z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D" target="_blank">Sector 36, Rohtak Bypass, Bhadurgarh-Mattan-Beri Rd, Haryana 124508</a></p>
      </div>
    </div>

    <div class="contact-form">
      {{-- CSRF for AJAX --}}
      <meta name="csrf-token" content="{{ csrf_token() }}">

      <form id="contactForm" novalidate>
        {{-- capture current page URL --}}
        <input type="hidden" name="url" id="pageUrl">

        <div class="form-row">
          <div class="form-group">
            <input type="text" name="name" placeholder="Full Name">
            <small class="text-danger error name"></small>
          </div>
          <div class="form-group">
            <input type="email" name="email" placeholder="Email Address">
            <small class="text-danger error email"></small>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <input type="tel" name="phone" placeholder="Phone Number">
            <small class="text-danger error phone"></small>
          </div>
          <div class="form-group">
            <input type="text" name="reason" placeholder="Reason of Contact">
            <small class="text-danger error reason"></small>
          </div>
        </div>

        <div class="form-group mb-2">
          <textarea name="message" placeholder="Your Comment"></textarea>
          <small class="text-danger error message"></small>
        </div>


        {{-- Simple CAPTCHA (server already set session) --}}
        <div class="form-group d-flex align-items-center gap-2">
          <span id="captchaQuestion">What is {{ $num1 }} + {{ $num2 }} ?</span>
          <input type="number" class="w-25" name="captcha_answer" placeholder="Answer">
        </div>
        <small class="text-danger error captcha_answer"></small>

        <button type="submit" class="animated-button mt-4" id="submitBtn" aria-label="Modern Button">
          <span class="text special-submit">Submit</span>
          <span class="circle" aria-hidden="true"></span>
          <svg viewBox="0 0 24 24" class="arr arr-right" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
        </button>

        <div id="formAlert" class="mt-2" style="display:none;"></div>
      </form>
    </div>
  </div>
</section>
@push('scripts')
<script>
$(function () {
  // set current page URL into hidden field
  $('#pageUrl').val(window.location.href);

  const $form = $('#contactForm');
  const $submit = $('#submitBtn');
  const $alert = $('#formAlert');

  function clearErrors() {
    $form.find('.error').text('');
    $alert.hide().removeClass('alert-success alert-danger').text('');
  }

  $form.on('submit', function (e) {
    e.preventDefault();
    clearErrors();

    $submit.prop('disabled', true).addClass('is-loading');

    $.ajax({
      url: "{{ route('contact.store') }}",
      method: "POST",
      data: $form.serialize(),
      headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      },
      success: function (resp) {
        if (resp.success) {
          $alert
            .addClass('alert alert-success')
            .text(resp.message || 'Thanks! We have received your message.')
            .show();

          // reset form (keep the URL hidden field)
          $form[0].reset();
          $('#pageUrl').val(window.location.href);
        } else {
          // unexpected non-422 error format
          $alert.addClass('alert alert-danger').text('Something went wrong. Please try again.').show();
        }
      },
      error: function (xhr) {
        if (xhr.status === 422 && xhr.responseJSON && xhr.responseJSON.errors) {
          const errors = xhr.responseJSON.errors;
          // map Laravel errors to <small class="error fieldname">
          Object.keys(errors).forEach(function (field) {
            const msg = errors[field][0];
            $form.find('.error.' + field).text(msg);
          });
        } else {
          $alert.addClass('alert alert-danger').text('Server error. Please try later.').show();
        }
      },
      complete: function () {
        $submit.prop('disabled', false).removeClass('is-loading');
      }
    });
  });
});
</script>
@endpush