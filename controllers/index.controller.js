const home = (request, response) => {
    response.render('home');
}

const blog = (request, response) => {

    let posts = [
        { id: 1, title: 'Post 1', resume: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est distinctio possimus nihil non deserunt! Omnis explicabo, reprehenderit magni'},
        { id: 2, title: 'Post 2', resume: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est distinctio possimus nihil non deserunt! Omnis explicabo, reprehenderit magni'},
        { id: 3, title: 'Post 3', resume: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est distinctio possimus nihil non deserunt! Omnis explicabo, reprehenderit magni'},
        { id: 4, title: 'Post 4', resume: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est distinctio possimus nihil non deserunt! Omnis explicabo, reprehenderit magni'},
        { id: 5, title: 'Post 5', resume: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est distinctio possimus nihil non deserunt! Omnis explicabo, reprehenderit magni'},
    ]

    response.render('blog', { posts: posts });
}

const postById = (request, response) => {

    let id = request.params.id;

    let posts = [
        { id: 1, title: 'Post 1', resume: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est distinctio possimus nihil non deserunt! Omnis explicabo, reprehenderit magni'},
        { id: 2, title: 'Post 2', resume: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est distinctio possimus nihil non deserunt! Omnis explicabo, reprehenderit magni'},
        { id: 3, title: 'Post 3', resume: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est distinctio possimus nihil non deserunt! Omnis explicabo, reprehenderit magni'},
        { id: 4, title: 'Post 4', resume: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est distinctio possimus nihil non deserunt! Omnis explicabo, reprehenderit magni'},
        { id: 5, title: 'Post 5', resume: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est distinctio possimus nihil non deserunt! Omnis explicabo, reprehenderit magni'},
    ]

    let post = posts.find((item) => item.id === parseInt(id));

    response.render('blogDetail', { post: post });
}



module.exports = {
    home,
    blog,
    postById
}