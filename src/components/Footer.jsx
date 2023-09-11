import { logo } from "../assets";

const Footer = () => {
    return (
        <footer>
            <div class="container__footer">

                <div class="box__footer">
                    <div class="logo">
                        <img src={logo} title="Cano's Code Logo" alt="Robot Cartoon Logo"/>
                    </div>
                    <div class="terms">
                        Ningun Dato Personal Se ha recopilado en esta Web, Todos los proyectos mostrados le pertenecen a Sanchez Cano Alejandro, cualquer duda o sugerencia puedes hacermela llegar
                        en mis redes sociales y/o en mi correo personal, el precio de los proyectos puede variar de acuerdo a los requerimientos del cliente.
                    </div>
                </div>

                <div class="box__footer">
                    <h2>Conoce mis proyectos</h2>
                    <a href="#">Gestick</a>
                    <a href="#">Molly</a>
                    <a href="https://www.rcdudemx.com">RC DUDE MX</a>
                    <a href="#">InvitameYA</a>
                </div>

                <div class="box__footer">
                    <h2>redes Sociales</h2>
                    <a href="https://www.facebook.com/profile.php?id=100031153749639"><i class="fa-brands fa-facebook"> Facebook </i></a>
                    <a href="https://www.instagram.com/_trikitrakatelas33/"><i class="fa-brands fa-instagram"> Instagram </i></a>
                    <a href="https://github.com/AlejandroTRIKITRAKATELAS33sanchezCano"><i class="fa-brands fa-github"> Github </i></a>
                    <a href="https://wa.me/5610336646?text=Hola%20Te%20Estoy%20Contactando%20Para%20Una%20Pagina%20Web"><i class="fa-brands fa-whatsapp"> WhatsApp </i></a>
                </div>
            </div>

            <div class="box__copyright">
                <hr/>
                    <p>Todos los derechos reservados ©2023 <b>Cano's Code</b></p>
            </div>
        </footer>
    );
}

export default Footer;
