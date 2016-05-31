<?php

$filters = [
    [
        'id' => 'name',
        'label' => 'Name',
        'type' => 'string',
    ],
    [
        'id' => 'in_stock',
        'label' => 'In Stock',
        'type' => 'integer',
        'input' => 'radio',
        'values' => [
            1 => 'Yes',
            0 => 'No',
        ],
        'operators' => [
            'equal',
            'not-equal',
        ]
    ]
];


header('Content-Type: application/json');
echo json_encode($filters, JSON_PRETTY_PRINT);
