
var sqlRules = 'name LIKE "karl%" AND in_stock = 0';

function SprykerQueryBuilder(sqlQuery){
    this.sql = sqlQuery;
    this.builder = '';
    this.init = function(){
        this.builder = $('#builder');
        this.createBuilder();
    };
}

SprykerQueryBuilder.prototype.createBuilder = function(){
    var self = this;
    $.get('/filters.php').done(function(filters){
        self.builder.queryBuilder({
            filters: filters
        });
        self.builder.queryBuilder('setRulesFromSQL', self.sql);
    });
};

SprykerQueryBuilder.prototype.saveQuery = function(){
    var result = this.builder.queryBuilder('getSQL', false);

    if (result.sql.length) {
        alert(result.sql);
    }
};

$(function(){

    var sqlBuilder = new SprykerQueryBuilder(sqlRules);
    sqlBuilder.init();

    $('#btn-get').on('click', function() {
        sqlBuilder.saveQuery();
    });

});