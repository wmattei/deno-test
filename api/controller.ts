interface IRequest {
    params?: any;
    request?: any;
    response: any;
}

export const getPosts = async ({ response }: IRequest) => {
    const placeholderUrl: string = Deno.env.toObject()
        .JSON_PLACEHOLDER as string;
    const postsResponse = await fetch(placeholderUrl);
    response.body = await postsResponse.json();
};
export const getPost = async ({ params, response }: IRequest) => {
    const placeholderUrl: string = Deno.env.toObject()
        .JSON_PLACEHOLDER as string;
    const postsResponse = await fetch(`${placeholderUrl}/${params.id}`);
    response.body = await postsResponse.json();
};
export const addPost = async ({ request, response }: IRequest) => {
    const body = await request.body();
    const placeholderUrl: string = Deno.env.toObject()
        .JSON_PLACEHOLDER as string;

    fetch(placeholderUrl, { method: 'POST', body: body.value })
        .then((res) => {
            console.log(res);
        })
        .catch(console.error);

    // response.body = await resp.json();
};
export const updatePost = () => {};
export const deletePost = () => {};
