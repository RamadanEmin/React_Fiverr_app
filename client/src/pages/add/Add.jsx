import React from 'react';

const Add = () => {

    return (
        <div className="add">
            <div className="container">
                <h1>Add New Gig</h1>
                <div className="sections">
                    <div className="info">
                        <label htmlFor="">Title</label>
                        <input
                            type="text"
                            name="title"
                            placeholder="e.g. I will do something I'm really good at"
                        />
                        <label htmlFor="">Category</label>
                        <select name="cat" id="cat">
                            <option value="design">Design</option>
                            <option value="web">Web Development</option>
                            <option value="animation">Animation</option>
                            <option value="music">Music</option>
                        </select>
                        <div className="images">
                            <div className="imagesInputs">
                                <label htmlFor="">Cover Image</label>
                                <input type="file" />
                                <label htmlFor="">Upload Images</label>
                                <input type="file" multiple/>
                            </div>
                            <button>Upload</button>
                        </div>
                        <label htmlFor="">Description</label>
                        <textarea
                            name="desc"
                            id=""
                            placeholder="Brief descriptions to introduce your service to customers"
                            cols="0"
                            rows="16"
                        ></textarea>
                        <button>Create</button>
                    </div>
                    <div className="details">
                        <label htmlFor="">Service Title</label>
                        <input type="text" name="shortTitle" placeholder="e.g. One-page web design" />
                        <label htmlFor="">Short Description</label>
                        <textarea
                            name="shortDesc"
                            id=""
                            placeholder="Short description of your service"
                            cols="30"
                            rows="10"
                        ></textarea>
                        <label htmlFor="">Delivery Time (e.g. 3 days)</label>
                        <input type="number" name="deliveryTime" min={1} />
                        <label htmlFor="">Revision Number</label>
                        <input type="number" name="revisionNumber" min={1} />
                        <label htmlFor="">Add Features</label>
                        <form action="" className="addBtn" >
                            <input type="text" placeholder="e.g. page design" />
                            <button type="submit">add</button>
                        </form>
                        <label htmlFor="">Price</label>
                        <input type="number" name="price" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Add;