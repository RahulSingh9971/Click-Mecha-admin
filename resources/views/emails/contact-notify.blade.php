<!DOCTYPE html>
<html>
<head>
    <title>New Contact Query</title>
</head>
<body>
    <h2>New Contact Query Submitted</h2>
    <p>A new query has been submitted via the website form. Details are below:</p>
    <ul>
        <li><strong>Name:</strong> {{ $contact->name }}</li>
        <li><strong>Email:</strong> {{ $contact->email }}</li>
        <li><strong>Phone:</strong> {{ $contact->phone ?? 'N/A' }}</li>
        <li><strong>Company Name:</strong> {{ $contact->company_name ?? 'N/A' }}</li>
        <li><strong>Services:</strong> {{ $contact->services ?? 'N/A' }}</li>
        <li><strong>Budget:</strong> {{ $contact->budget ?? 'N/A' }}</li>
        <li><strong>URL:</strong> {{ $contact->url ?? 'N/A' }}</li>
        <li><strong>Message:</strong> {{ $contact->message ?? 'N/A' }}</li>
    </ul>
    <p>Thanks,<br>{{ config('app.name') }}</p>
</body>
</html>
