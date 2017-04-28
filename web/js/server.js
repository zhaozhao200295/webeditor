export function get_file_list(path, cb, project) {
    project = project || 0;
    var path = path || '/';
    $.get("/get_file_list?path=" + path + '&project=' + project, cb);
}

export function get_path_history() {
    $.get("/get_path_history", function (data) {
        path_history = data;
        $('#filepath').typeahead({
            source: data
        })
    })
}

export function get_file_content(path, cb) {
    var path = path || '/';
    $.get("/get_file_content?path=" + path, cb);
}

export function api_search(params, cb){
    $.get('/search', params, cb);
}

