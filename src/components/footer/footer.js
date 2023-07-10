import React from "react";
import './footer.css';
import { AiFillInstagram } from "react-icons/ai";
import { GrLinkedin } from "react-icons/gr";
import {FaLinkedinIn} from "react-icons/fa"
import { MdEmail } from "react-icons/md";
import imagem from "../../img/site-logo.jpg";

const Footer = () => <footer className="page-footer font-small py-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row ">
            {/* <div className="img col-md-6 mt-md-6 mt-6 py-3">
                <img src={imagem} width={84} height={84}></img>
            </div> */}

            <div className="redes col-md-12 d-flex-justfity-content-center">
                {/* <h5 className="text-h5 text-uppercase d-flex-justify-content-center">Redes Sociais</h5> */}
                <ul className="list-unstyled d-flex justify-content-center">
                    <li className="p-1"><a href="https://www.instagram.com/entrennection/" target="_blank"><AiFillInstagram size={24}/></a></li>
                    <li className="p-1"><a href="https://www.linkedin.com/company/google/" target="_blank"><FaLinkedinIn size={24}/></a></li>
                    <li className="p-1"><a href="https://www.linkedin.com/company/microsoft/" target="_blank"><MdEmail size={24}/></a></li>
                </ul>
            </div>

            {/* <div className="col-md-3 mb-md-3 mb-3">
                <h5 className="text-h5 text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Link 1</a></li>
                    <li><a href="#!">Link 2</a></li>
                    <li><a href="#!">Link 3</a></li>
                    <li><a href="#!">Link 4</a></li>
                </ul>
            </div> */}
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2023 Copyright: Entrennection</div>

</footer>

export default Footer