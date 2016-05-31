
function SprykerQueryBuilder(sqlQuery){
    this.getFiltersUrl = '/filters.php';
    this.sql = sqlQuery;
    this.builder = '';
    this.init = function(){
        this.builder = $('#builder');
        this.createBuilder();
    };
}

SprykerQueryBuilder.prototype.createBuilder = function(){
    var self = this;
    $.get(self.getFiltersUrl).done(function(filters){
        self.builder.queryBuilder({
            filters: filters
        });
        self.builder.queryBuilder('setRulesFromSQL', self.sql);
    });
};

SprykerQueryBuilder.prototype.saveQuery = function(){
    var result = this.builder.queryBuilder('getSQL', false);

    if (result.sql.length) {
        $('#sqlQuery').val(result.sql);
    }
};

var sqlBuilder;

function loadSqlQuery(){
    var sqlRules = $('#sqlQuery').val();
    sqlBuilder = new SprykerQueryBuilder(sqlRules);
    sqlBuilder.init();
}

$(function(){

    $('#btn-get').on('click', function() {
        sqlBuilder.saveQuery();
    });

    $('#reload').on('click', function(){
        loadSqlQuery();
    });

    loadSqlQuery();
});
