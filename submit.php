<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $hunter = $_POST['hunter'] ?? '';
    $badge = $_POST['badge'] ?? '';
    $rank = $_POST['rank'] ?? '';
    $wins = $_POST['wins'] ?? '';
    $userId = $_POST['userId'] ?? '';

    // Debugging output
    error_log("Received data: Hunter: $hunter, Badge: $badge, Rank: $rank, Wins: $wins, User ID: $userId");

    // Check for empty values before proceeding
    if (empty($hunter) || empty($badge) || empty($rank) || empty($wins) || empty($userId)) {
        error_log("One or more fields are empty.");
        echo "Error: One or more fields are empty.";
        return;
    }

    // Create or load the XML structure
    $filePath = 'submissions.xml';
    if (file_exists($filePath)) {
        $existingXml = simplexml_load_file($filePath);
    } else {
        $existingXml = new SimpleXMLElement('<submissions/>');
    }

    // Add a new submission entry
    $newSubmission = $existingXml->addChild('submission');
    $newSubmission->addChild('hunter', htmlspecialchars($hunter));  // Full hunter name
    $newSubmission->addChild('badge', htmlspecialchars($badge));   // Full badge text
    $newSubmission->addChild('rank', htmlspecialchars($rank));     // Full rank text
    $newSubmission->addChild('wins', (int)$wins);
    $newSubmission->addChild('userId', (int)$userId);

    // Save the updated XML back to the file
    if (!$existingXml->asXML($filePath)) {
        error_log("Failed to save XML to $filePath");
    }

    // Convert XML to CSV
    convertXmlToCsv($filePath, 'submissions.csv');
}

// Function to convert XML to CSV
function convertXmlToCsv($xmlFile, $csvFile) {
    // Load the XML file
    $xml = simplexml_load_file($xmlFile);
    if ($xml === false) {
        error_log("Failed to load XML file: $xmlFile");
        return;
    }

    // Open the CSV file for writing
    $csvHandle = fopen($csvFile, 'w');
    if ($csvHandle === false) {
        error_log("Failed to open CSV file for writing: $csvFile");
        return;
    }

    // Write the header row
    fputcsv($csvHandle, ['Hunter', 'Badge', 'Rank', 'Wins', 'User ID']);

    // Iterate through each submission and write to CSV
    foreach ($xml->submission as $submission) {
        fputcsv($csvHandle, [
            (string)$submission->hunter, // Full hunter name
            (string)$submission->badge,  // Full badge text (e.g., "S Badge")
            (string)$submission->rank,    // Full rank text (e.g., "Tier 6")
            (int)$submission->wins,
            (int)$submission->userId,
        ]);
    }

    // Close the CSV file
    fclose($csvHandle);
}
?>
