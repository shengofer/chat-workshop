function CreateBaseView() {
    var view = {};

    view.render = function() {
        view.parentNode.add(view.viewNode.put(Mustache.to_html(view.template, view.viewModel)));
    };

    pubsub.extend(view);

    return view;
}

module.exports = CreateBaseView;