steal('jquery/model', function () {

        $.Model('App.Models.Category',
            /* @Static */
            {
                findAll:"static/js/app/data/categories/all.json",
                findOne:"static/js/app/data/categories.json"

            },
            /* @Prototype */
        {});
    }
);

