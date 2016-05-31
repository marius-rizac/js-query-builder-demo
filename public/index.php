<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>jQuery Query Builder</title>
    <link rel="stylesheet" href="/dist/css/bundle.css?<?php echo time(); ?>">
</head>
<body>
<?php
$sql = 'name LIKE "mainboard%" AND in_stock = 1';
?>
<form action="" onsubmit="return false">
    Query: <input type="text" id="sqlQuery" value="<?php echo htmlentities($sql); ?>" style="width: 600px;" />
</form>

<div id="builder"></div>

<button id="btn-get">Get Query</button>
<button id="reload">Reload</button>

<script src="/dist/js/external.js?<?php echo time(); ?>"></script>
<script src="/dist/js/app.js?<?php echo time(); ?>"></script>
</body>
</html>