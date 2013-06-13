generateGrid = function (data){
  var table = $('#unapprove-tests-nav');
  var pager = $('#unapprove-tests-nav-pager');
          $.fn.jqGrid.call(table,{
            datatype: 'local',
            colNames:['Назва', 'Опис тесту', 'isApproved','Детальніше'],
            colModel :[
                      {name:'name', index:'name', width: 120, align: 'center'},
                      {name:'description', index:'description', width: 120, align: 'center'},
                      {name:'isApproved', index:'is_approwed', width:120, align: 'center', formatter:'checkbox',formatoptions:{disabled: true}},
                      {name: 'detail_btn', index: 'view'} 
                    ],
            //gridview: true,
            pager : pager,
            rowNum : 10,
            rowList: [10,20,30,100],
            sortname: 'name',
            sortorder: 'asc'
          });
        // for(var i = 0, p=0; i <= data.length; i++){
        //   data[i].fields.detail_btn = '<button class = "detailed_view btn" id = "' + data[i].pk + '" >Переглянути тест</button>';
        //   $.fn.jqGrid.call(table, 'addRowData', i+1,data[i].fields);  
        // }
        for(var i = 0, p=0; i <= data.length; i++){
          data[i].detail_btn = '<button class = "detailed_view btn" id = "' + data[i].id + '" >Переглянути тест</button>';
          $.fn.jqGrid.call(table, 'addRowData', i+1,data[i]);  
        }
        }