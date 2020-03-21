import React from "react";
import "./style.css";

function Contact() {
    return (
        <div className="col-md-8 articlebox">
            <div className="container">
                <div className="row">
                    <div className="col">
                    <h1 className="articletitle">Contact</h1>
                    </div>

                </div>

                <div className="row articlecontent">
                    <div className="col-md">
                        <form>
                            Name: <br />
                            <input className="data" type="text" name="name" placeholder="John Smith" /><br />
                            Email: <br />
                            <input className="data" type="text" name="email" placeholder="example@gmail.com" /><br />
                            Message: <br />
                            <textarea className="data messagebox" cols="30" rows="10" ></textarea>
                            </form>
                            <br />
                            <button className="submit" type="button">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;