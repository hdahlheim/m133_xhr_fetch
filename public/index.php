<?php

require '../vendor/autoload.php';

use \Siler\Route;
use \Siler\Http\Response;

Route\get('/', '../temp/index.phtml');

Route\get('/ajax/html/students', function () {
    $students = getStudents();

    $template = template(
        '../temp/_students.phtml',
        ['students' => $students]
    );

    Response\html($template);
});

Route\get('/ajax/json/students', function () {
    $students = getStudents();

    Response\json($students);
});

if (!Route\did_match()) {
    Response\html('404 not found', 404);
}

function getStudents () {
    return json_decode(file_get_contents('../students.json'), true);
}

function template($path, $context) {
    // Provide the context variables in the current context
    extract($context);

    // Load template as string
    ob_start();
    require $path;

    return ob_get_clean(); // Return template string
}
