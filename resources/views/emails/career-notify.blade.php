<!DOCTYPE html>
<html>
<head>
    <title>New Job Application</title>
</head>
<body>
    <h2>New Job Application Received</h2>
    <p>A new candidate has submitted an application for the job ID: {{ $application->career_id }}. Details are below:</p>
    <ul>
        <li><strong>Name:</strong> {{ $application->name }}</li>
        <li><strong>Email:</strong> {{ $application->email }}</li>
        <li><strong>Phone:</strong> {{ $application->phone }}</li>
        <li><strong>State:</strong> {{ $application->state }}</li>
        <li><strong>Experience:</strong> {{ $application->experience }}</li>
        <li><strong>LinkedIn:</strong> {{ $application->linkedin ?? 'N/A' }}</li>
        <li><strong>Cover Letter:</strong> {{ $application->cover_letter ?? 'N/A' }}</li>
    </ul>
    <p>Note: Resume is uploaded in the system under "public/storage/careers/resumes/{{ $application->resume }}".</p>
    <p>Thanks,<br>{{ config('app.name') }}</p>
</body>
</html>
