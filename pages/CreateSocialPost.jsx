import React from "react";

const CreateSocialPost = () => {
  const handleChange = (event) => {
    event.preventDefault();
    const form = event.target;
    if (form.value.length > 0) {
      document.getElementById('s-post').classList.remove('btn-disabled');
    }
    else {
      document.getElementById('s-post').classList.add('btn-disabled');
    }
  };
  return (
    <section>
      <input type="checkbox" id="social-post" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="social-post"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="border-b pb-6">
            <h3 className="text-lg font-bold text-center">Create Posts</h3>
          </div>
          <div>
            <form>
              <textarea
                onChange={handleChange}
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none mt-5 mb-5"
                rows="8"
                placeholder="What's your mind?"
              ></textarea>
              <button id="s-post" className="btn btn-block btn-disabled">
                Post
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateSocialPost;
