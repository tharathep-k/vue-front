<template>
    <div>
        <Title>Home Page</Title>
        <div class="container">
            <div class="top">
                <div class="left">
                    <h1>Logo</h1>
                    <h3>Name Website</h3>
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ad obcaecati a natus
                            quisquam, fuga doloribus, veritatis dicta quo, voluptate aliquid consequatur qui deserunt
                            provident quam repudiandae nesciunt atque hic?
                        </li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ad obcaecati a natus
                            quisquam, fuga doloribus, veritatis dicta quo, voluptate aliquid consequatur qui deserunt
                            provident quam repudiandae nesciunt atque hic?
                        </li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ad obcaecati a natus
                            quisquam, fuga doloribus, veritatis dicta quo, voluptate aliquid consequatur qui deserunt
                            provident quam repudiandae nesciunt atque hic?
                        </li>
                    </ul>
                </div>
                <div class="right">
                    <h1>Header</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, fugit.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nulla error quia sapiente quae
                        tempora sunt nemo id aliquam maiores, ea omnis, dolorum vitae atque, quisquam eius magni nisi illum?
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, earum quos repellat placeat numquam
                        libero neque maiores molestiae ab commodi quis, officiis repellendus error recusandae totam nisi
                        qui? Amet, facilis?
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi tenetur aut consectetur ab iste dolor
                        aliquam autem ducimus nesciunt, odio nulla voluptatum. Repellendus corporis ratione laudantium
                        incidunt? Iste maiores error mollitia iure qui tenetur numquam commodi, blanditiis labore dolores
                        vel.
                    </p>
                </div>
            </div>
            <!-- Site footer -->
            <footer class="footer-distributed">

                <div class="footer-left">

                    <h3>Company<span>logo</span></h3>

                    <p class="footer-links">
                        <a href="#" class="link-1">Home</a>

                        <a href="#">Blog</a>

                        <a href="#">Pricing</a>

                        <a href="#">About</a>

                        <a href="#">Faq</a>

                        <a href="#">Contact</a>
                    </p>

                    <p class="footer-company-name">Company Name © 2015</p>
                </div>

                <div class="footer-center">

                    <div>
                        <i class="fa fa-map-marker"></i>
                        <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
                    </div>

                    <div>
                        <i class="fa fa-phone"></i>
                        <p>+1.555.555.5555</p>
                    </div>

                    <div>
                        <i class="fa fa-envelope"></i>
                        <p><a href="mailto:support@company.com">support@company.com</a></p>
                    </div>

                </div>

                <div class="footer-right">

                    <p class="footer-company-about">
                        <span>About the company</span>
                        Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor
                        lacus vehicula sit amet.
                    </p>

                </div>

            </footer>
        </div>
    </div>
</template>

<script setup>


</script>

<style scoped>
.container {
    background: #f0ecec;

}
.top {
    /* border: 1px solid black; */
    display: flex;
    height: 70vh;
    justify-content: space-between;
}

.left {
    /* border: 2px solid red; */
    width: 48vw;
    display: flex;
    flex-direction: column;
}
.right {
    /* border: 2px solid blue; */
    width: 48vw;
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.footer-distributed {
    background: azure;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
    box-sizing: border-box;
    width: 100%;
    text-align: left;
    font: bold 16px sans-serif;
    padding: 55px 50px;
}

.footer-distributed .footer-left,
.footer-distributed .footer-center,
.footer-distributed .footer-right {
    display: inline-block;
    vertical-align: top;
}

/* Footer left */

.footer-distributed .footer-left {
    width: 40%;
}

/* The company logo */

.footer-distributed h3 {
    color: black;
    font: normal 36px 'Open Sans', cursive;
    margin: 0;
}

.footer-distributed h3 span {
    color: lightseagreen;
}

/* Footer links */

.footer-distributed .footer-links {
    color: black;
    margin: 20px 0 12px;
    padding: 0;
}

.footer-distributed .footer-links a {
    display: inline-block;
    line-height: 1.8;
    font-weight: 400;
    text-decoration: none;
    color: inherit;
}

.footer-distributed .footer-company-name {
    color: #222;
    font-size: 14px;
    font-weight: normal;
    margin: 0;
}

/* Footer Center */

.footer-distributed .footer-center {
    width: 35%;
}

.footer-distributed .footer-center i {
    background-color: #33383b;
    color: black;
    font-size: 25px;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    text-align: center;
    line-height: 42px;
    margin: 10px 15px;
    vertical-align: middle;
}

.footer-distributed .footer-center i.fa-envelope {
    font-size: 17px;
    line-height: 38px;
}

.footer-distributed .footer-center p {
    display: inline-block;
    color: black;
    font-weight: 400;
    vertical-align: middle;
    margin: 0;
}

.footer-distributed .footer-center p span {
    display: block;
    font-weight: normal;
    font-size: 14px;
    line-height: 2;
}

.footer-distributed .footer-center p a {
    color: lightseagreen;
    text-decoration: none;
    ;
}

.footer-distributed .footer-links a:before {
    content: "|";
    font-weight: 300;
    font-size: 20px;
    left: 0;
    color: #fff;
    display: inline-block;
    padding-right: 5px;
}

.footer-distributed .footer-links .link-1:before {
    content: none;
}

/* Footer Right */

.footer-distributed .footer-right {
    width: 20%;
}

.footer-distributed .footer-company-about {
    line-height: 20px;
    color: #92999f;
    font-size: 13px;
    font-weight: normal;
    margin: 0;
}

.footer-distributed .footer-company-about span {
    display: block;
    color: black;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 20px;
}

.footer-distributed .footer-icons {
    margin-top: 25px;
}

.footer-distributed .footer-icons a {
    display: inline-block;
    width: 35px;
    height: 35px;
    cursor: pointer;
    background-color: #33383b;
    border-radius: 2px;

    font-size: 20px;
    color: black;
    text-align: center;
    line-height: 35px;

    margin-right: 3px;
    margin-bottom: 5px;
}

/* If you don't want the footer to be responsive, remove these media queries */

@media (max-width: 880px) {

    .footer-distributed {
        font: bold 14px sans-serif;
    }

    .footer-distributed .footer-left,
    .footer-distributed .footer-center,
    .footer-distributed .footer-right {
        display: block;
        width: 100%;
        margin-bottom: 40px;
        text-align: center;
    }

    .footer-distributed .footer-center i {
        margin-left: 0;
    }

}</style>