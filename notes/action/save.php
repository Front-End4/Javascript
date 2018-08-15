<?php

$fp = fopen('../data/data.txt', 'w');
fwrite($fp, $_POST['data']);
fclose($fp);