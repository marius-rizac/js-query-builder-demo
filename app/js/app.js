
var sqlRules = 'name LIKE "karl%" AND in_stock = 0';

$(function(){

    var builder = $('#builder');

    builder.queryBuilder({
        filters: [
            {
                id: 'name',
                label: 'Name',
                type: 'string'
            },
            {
                id: 'in_stock',
                label: 'In stock',
                type: 'integer',
                input: 'radio',
                values: {
                    1: 'Yes',
                    0: 'No'
                },
                operators: ['equal', 'not_equal']
            }
        ]
    });

    $('#btn-get-old').on('click', function() {
        var result = $('#builder').queryBuilder('getRules');

        if (!$.isEmptyObject(result)) {
            alert(JSON.stringify(result, null, 2));
        }
    });

    builder.queryBuilder('setRulesFromSQL', sqlRules);

    $('#btn-get').on('click', function() {
        var result = builder.queryBuilder('getSQL', false);

        if (result.sql.length) {
            console.log(result.sql);
            console.log(JSON.stringify(result.params, null, 2));
            //alert(result.sql + '\n\n' + JSON.stringify(result.params, null, 2));
        }
    });

});