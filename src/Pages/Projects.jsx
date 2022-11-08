import React from "react";
import "./Projects.css";
import { FaGithub, FaLink } from "react-icons/fa";
import beautybebo from "../Image/beautybebo.png";
import dice_app from "../Image/dice_app.png";
import getharvest from "../Image/getharvest.png";
import naukari from "../Image/naukari.png";

export const Projects = () => {
  return (
    <div id="Projects">
      <div className="projectsContainer">
        <div>
          <div className="projectheading">
            <h1>Projects</h1>
          </div>

          <div className="projectBox">
            <div className="projectItem">
              <div className="projectImage">
                <img src={beautybebo} alt="" />
              </div>
              <div className="projectDetails">
                <h2>Clone of beautybebo.com website</h2>
                <div className="desc">
                  <span>Description</span>
                  <br />
                  This is the clone of beautybebo.com website. Beauty bebo is India's fastest growing online retail store for the day to day and special occasion need of the Makeup, Skin care, Hair care, Personal care, Mom and Baby care, Fragrance and Ayurveda products. We at Beauty Bebo are committed to provide genuine products on fair price to our customers. This is the clone of beautybebo.com website (an ecommerce website) with the help of HTML, CSS, and JavaScript, here I have implemented some functionality and a best clone UI of the original website.
                </div>
                <div className="functionality">
                  <h3>Functionality</h3>
                  <li>Users can add product items to cart </li>
                  <li>Users can check their items in cart page </li>
                  <li>Users can remove the items as well from cart page</li>
                </div>
                <div className="techStacks">
                  <div className="tech-stacks">
                    <h3>Tech-Stacks & Tools used</h3>
                    <div>
                      <div className="languages">
                        <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_3V0WmaHi7hLENYgmyF3iKWD7BP4bn82grA&usqp=CAU" alt="html" />
                        </div>
                        <div>
                          <p>HTML</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src="data:image/png;base64,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" alt="CSS" />
                        </div>
                        <div>
                          <p>CSS</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFRO1lwENHcC2oeVqPSStuSBR-k3AwzhXOg&usqp=CAU" alt="javascript" />
                        </div>
                        <div>
                          <p>JavaScript</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src="data:image/png;base64,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" alt="netlify" />
                        </div>
                        <div>
                          <p>Netlify</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLo3ft2ow2SVABeljs3AoCOAn2DkiDxRctfg&usqp=CAU" alt="github" />
                        </div>
                        <div>
                          <p>GitHub</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="btn">
                    <button>
                      <h3>
                        <a href="https://github.com/lokesh-patidar/rightful-order-9279" target="_blank">
                          <FaGithub /> GitHub Repo
                        </a>
                      </h3>
                    </button>
                    <button>
                      <h3>
                        <a href="https://fascinating-youtiao-fd95ce.netlify.app/" target="_blank">
                          <FaLink /> Diployed Link
                        </a>
                      </h3>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <br />
            <br />

            <div className="projectItem1">
              <div className="projectImage">
                <img src={dice_app} alt="" />
              </div>
              <div className="projectDetails">
                <h2>Dice Rolling App</h2>
                <div className="desc">
                  <span>Description</span>
                  <br />
                  This is a mini dice rolling app that I made with the help of HTML, CSS, and JavaScript, here I have generated random numbers from 1 to 6 and I gave a good UI to it. Three members can participate to play with it.
                </div>
                <div className="functionality">
                  <h3>Functionality</h3>
                  <li>Fully responsive </li>
                  <li>Generating random numbers </li>
                </div>
                <div className="techStacks">
                <div className="tech-stacks">
                    <h3>Tech-Stacks & Tools used</h3>
                    <div>
                      <div className="languages">
                        <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_3V0WmaHi7hLENYgmyF3iKWD7BP4bn82grA&usqp=CAU" alt="html" />
                        </div>
                        <div>
                          <p>HTML</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src="data:image/png;base64,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" alt="CSS" />
                        </div>
                        <div>
                          <p>CSS</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFRO1lwENHcC2oeVqPSStuSBR-k3AwzhXOg&usqp=CAU" alt="javascript" />
                        </div>
                        <div>
                          <p>JavaScript</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src="data:image/png;base64,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" alt="netlify" />
                        </div>
                        <div>
                          <p>Netlify</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLo3ft2ow2SVABeljs3AoCOAn2DkiDxRctfg&usqp=CAU" alt="github" />
                        </div>
                        <div>
                          <p>GitHub</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="btn">
                    <button>
                      <h3>
                        <a
                          href="https://github.com/lokesh-patidar/Dice-App"
                          target="_blank"
                        >
                          <FaGithub /> GitHub Repo
                        </a>
                      </h3>
                    </button>
                    <button>
                      <h3>
                        <a
                          href="https://whimsical-sorbet-723292.netlify.app/"
                          target="_blank"
                        >
                          <FaLink /> Diployed Link
                        </a>
                      </h3>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <br />
            <br />

            <div className="projectItem">
              <div className="projectImage">
                <img src={getharvest} alt="" />
              </div>
              <div className="projectDetails">
                <h2>Clone of getharvest.com website</h2>
                <div className="desc">
                  <span>Description</span>
                  <br />
                  Harvest is a cloud-based time tracking tool designed for businesses of all sizes.
                  Key features include time and expense management, team management, project management, scheduling and invoicing. I worked on it with my team. I have assigned a team of 5 members for this project to clone getharvest.com. We have built this exactly as similar as a real website with the help of html, css and javascript.

                </div>
                <div className="functionality">
                  <h3>Functionality</h3>
                  <li>Authentication of users </li>
                  <li>Fully responsive </li>
                </div>
                <div className="techStacks">
                <div className="tech-stacks">
                    <h3>Tech-Stacks & Tools used</h3>
                    <div>
                      <div className="languages">
                        <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_3V0WmaHi7hLENYgmyF3iKWD7BP4bn82grA&usqp=CAU" alt="html" />
                        </div>
                        <div>
                          <p>HTML</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA2FBMVEUmTeT///8pZfHr6+soWevy8evv7+sgSeT39/cQQuQQW/C8y/obR+SutugVROQjS+RUb+Z2iOaYpOciYvFbhfSAnfUAPOKlufgzV+QAWPAAOeInVegpY/AcX/EnVukAN+LZ3vnx8/22v/Rpfua8w+muuPPt8P2RoO/N1PfFzfb2+P6DlO3a3eqds/c8XeXO2fuUrPdFdvKElOdke+rk5/tHZOdSbuh1iOuvwfnN0uqPnu+dqejW2/nk5uuOqPaYr/dnjfRLe/M2b/JzlfVjivTR1epUgPO1vekJZLFrAAAN80lEQVR4nN3da1vaShcGYFCBHUwTlRo5VtF6QkXruXW3trWH//+PdoJ2V2ZmrWeyZgYuXd923wvM/RKGh8xaoVJ9Xqtx5eVXvDplqkz9134y78PzUMk+I9yN5n14HiraZYTLr0K4zAgPsnkfnofKThnh5asQXjLCvVdxlu4xwmqczvv4nCuNq5yw8gqEKmn6P8eNeR+gczXGrPDiFQgvWOHRy49t8RErfAWxTQltqvDu5X9cRBus8BXENiW0qcIZxLbUc6nPnx2wwq3gwt6S5+qpwi1WOOyGFi4teK4l5Q90h6ywGvx96F34bvo8TaMqL+yFjm3ehcoRpz0gvAodavwLp5+/cQWEKy9OqDy/Gto04U3o2BZaGN8A4acXL/wEhHehg6l3obI0RndAuB3648K3sKUKt4HwMHSo8S5Unj87BMLgsc23cKAKt4Bw76UJ1dCW7QHh6MUJlfdhNgLCahQ4tvkWqqEtUUGaMHQw9S6cfvp0CQqvA8c230Ll6RvXUBg6tgUWaqFNF56/cOE5FN4Hjm2ehX1l2UjuoTB0bAss1EKbLgwd2zwLYWjThf++LKEW2v6Fwr3AV9s8C7UrbWpo04U4tiWRS6VNlxpoQhTadCHcJE3W3rjU72WX+qIS1WuJBo/2L2MgjN7X6g71j/YHy9StKlRj6Vh7iC5EsS16U190KDfhvSpUDk4PbQYh2gZO1mrzE64j4Y6FEG0Dx+dzFH5tKULlLaVuABuFayC2xTdzFH5ThFpoW7MQou69xsochd/7vFDp2jML0TZwOp6jsK8IcWgzCFFsSyvzW0uHTeVtiEObQYi699L489yEex010qjCS+0xuhBuA0fHcxNuaULlfdjVQptBWN0Ewuyjy2nqJDxUz1IltFU29ccYhA0Y2+YmvFWFamhLrYRoG9gttjkJT1CkUTeAzUIc2+YmFIQ2kzBsbHMSPqihTT00PbSZhKh7zy22OQl/gViqdu0RwrCxzUkoCG0mYdjY5iRsgtCmdu0RQtS9lzbmJlQ/8LXQdqA/xiCEQxddB6CTUAttmlAPbSbhEAkzl9jmIoShLRtaCUdo6MIptrkID0BoSxt6LDUJ4SapU2xzEcLQpnbtUUIc22rycgDqoQ117VFC1L2Xjlfk9estql+nhmOalHY9WDkwrWuPEsJt4LQhr3ctVB1S+KAK1Sttq4YHmYRBhy7wzkzHsOQ/1ltBaDMKT+YsNCyIj/UBhTa1a48SBt0GhsL+gAJWF9TQBjeACWHQoQss/E4BRwN0LdEQ2ozCoN17UNj6RglxaFO79ihh0G1gLPxBCfXQpjy3vgFMCOHVtqDCwQMlPBVcaSOEIaeBsfCMEi6j0BabHmUUhpyVxcIN0yEVtYFCm74BTAlDDl1AYdPwPf2xRKHNLAzZvYeFZGhD1xL1rj1SGLJ7Dwrp0PZD3R5VheqoBS0MOXSBX0PTkj8pFNoSU2gzC0PGNiwkY6kWaWxCm1kYsnsPCZlYqn7gW2wAU8KQsQ0KyVg6FIU2szDk0AUStt5Swku4AWx8BxuFwyRcqEFCJrSBa4lpbHwHG4Uhb3EChV8oIQxthMX4r+05Ck8oIezaa5cQBhy6QEI6tAm69mjhTrhQA4XGJb8oWWgjhHBWNo2l1WsN2OoYl/yi1NAG52M5IereS8er0jpa5+thSAnVrj1VaOjao4VwG/hiDlf1tQ1g5aDMoY0QotjWuBJvksp3Zlrlu/ZoIeze681+72kEQ5vetUcLA3bviYU4tJm/WJqFI9jbJt4GFgtRaKtsmr92mYVVFEzl28BioRba1A1g45U2Uohim3wbWCwUhjZKGG7oQiw8Q6FtpZRwB3Xv3c1cCEOboWuPEYbr3hMLtVEL9ZAMXXuM8Ax1763OXPgNRBoitFFCi9g2ayHcHjV07THCcN17YqH6YaGFNuKLJSGE3XvprIWSUQtOCLv3IiFQLJSGNkoIb5ksHrqQCmHXXjQsJYSbpNlP4QeiVIhGLajQRgrR9URxbJMKYdceKSH+HW0Di2ObVCgZtWCFaOgiksY2qRCOWhg3gBkhim3JvvDjQiqUhjZSCIcupLFNKlRHLbTtUVPXHifcCBXbpEL1Sps2iECENlKIYlvjuia78YAQiGMpda2cEsLY1luT1ckGWxQQX2kzde1xQrgNnCayqnCX9JsLlFA0asEKg90ymd2ZofsS8XzssKQw2J3peOFX6nDgqIV2JzooDHVnOlY4WKcORzRqwQtD3TKZF5IbwKJRC14Y6pcuWGHzljocWdceKwzVvccLyQ1gbdRCeVrjqAUvDHXLZFbYIa5EGOZjlaclQxstDPVLF7yQ7EuUzMcCYajuPV5Idu1p26NWXXusEHfvWf/iRAkhdTTaqIV1aKOFOLa1qWKJnLBPhzZ4LZE8v0kh7N5LPhPfHmpsHOKEdGgTdu2xQnjvveiYuI5RY19EVigObZWMeiQtlG8D19jNR05IhzbZqAUQquFdreg3JWR7xlihdnvVP4VGLagNYFYIt4F3KSF7FYsTOoQ2YgOYFaLYRt57r8ZexWKFZF8iDG3mrj1eiIYu4iNCWGc3HzkhPQEsG7UAQnTL5HiHEv4WC8kPNdmoBRCi2EbexKXOXsViz9IhdTCi+VgkRLEtHRMrTf1YKOy3yFgqG7UAQti9l1I7F8fClYYObcJRCyCEs7IZAVxc5MI3J/xAHQsMbcb5WCSEsS0jYxt3FYsR0hPA2nysOmoRkec3I4SbpHRs465iMUKH0MYx6P8J3zKZEnJXsTghOQGsh7bpYzPPx0KhuHuvtsqEBU5I7lpIu/aAEHbviWIbI6RDm7RrDwjF3Xt1bgaVE1qHNvyrFlZC8S2T2djGCIOENk4ovvde/WOaRdQ9Qglhf9DsLJBLvhra7K8lssJlGNuoje56/efdRSNLTG9kk7A16Cw8LNMf2iPhqAUSutwyuV6vLb7fv+pGWm+VKuwPOp23G3ToKgp37TGPZ4SuQxf1Wu3z79V2Nq1cmtI1mx/OyPXl75FIu/aAcOThlsn1Wv3n7k6Un7B/lH+E/fzU7K8zp+azko5aIKGnWybnJ2zt49pK8vRSLj298Vo/bpn/46cLjVpUusyDOSG4Pl+ie684Yd+fT07YpWLV/HZPbjKZSty1h4R+b5mcK4/f3PSS7+uHzDllLOF8LBZ6H7ooVlirN55SLqGNFQYZupB0fYm79pAwyC2TJUJtPlYNbeTXLiAMMnQhEUpHLaAQdu9JZmUlQniljfzaBYSwe68yGyHu2uNiESeEQxeZoBNaIHQKbawQ3zJZMA0sEIpHLaBwhH4HQjJ0IRDCUYuUixCcMMgtkwVCGNro7VEkDPFLFwKheNQCC+EvXdzVamWNAqF41AILueuek4qv1z7mXwHLKMsKT++/aT96qB4FF9p4Ib5lciPJ4p03xyVeyjLCvduvzc5AjWzlQhsvPLHpbUvjKBufv1+0fCmthYdfvnea6iWoSZW50gaE1t17jVy5cvezbvFSWgm3Tn51mmor2/9l86sWlsJSt0zOT9j26u/P6ISFwuHyw4Lp1PxbtvOxFsKy997LT9ju1dpH9oTlhadnH5gX76lKhTZeKLllcv5SVnZ26bWHFl7e/mh1kM4kJEctsFB4y+Snteez8aU0C0eH69S6oleZK21IKL9lcq5MjGuPQZivK014aj6rMlfakNDplsmpce1RhHtwXTEIp/8OH9qA0Hnoojhhr/afrz3PhafFR16JF++plL/BhzYg9DJ0Mb32/BHm68rAal2BQnrUwkLoa+ii+BhpT9aeiTBfV4pTU8QrMR9rI/R5y+RcGedrzz9l1xUo5EMbEHoeuijWnkbZdUWrEl17WBjglsn4N0pQ2Y9aWAgD3DI5gJDfpeOFAW6Z7C60H7WwEAa4ZbK7ULupCb9ZxwsD3DLZXVgutCGh/1smexBOPyHXtWch9H/LZGeh+g2f69qzEPq/ZbKbcNDT3jfMqIWN0P+srFzYWsp1+ruGGbWwEaKhi1kJW0u9CrHqcV17FkK0DTwT4eCd8cV7KhDakNB/bCspbBWf7+yCDkIbEqLuvaDCfrGuwI8rrmvPQgi3gYMJW+yp+ayYUQsbIbxlchBhn15XDEJegIRwVta/cPKRZ/9X04aj0Hts4+9PY/7I4wqFNij0HttIod26ogtBaIPCC98f+WZhvq7Yv/OmKuG69myE29fdzOuPBerCPK+UPTWfKo2zbIXdWrMQ5svp8lEvi7ydrIpw0MMPMesaUdY+t2hVxcKiLncvsiz2olx6/uJVhKdmI8mynV27Lmo7YVEHn8aZPlwgFbYG8lOz2CgAUU0kzGtv+yYyz4mUE4rXleKCa7K6PSxz0KWERW2tXWcOa0/6zmVdSVbuQAr1IKwWO+1HFXqwCR2n7FH5qdmzWVf8CIvK157E9YS1rUnTjuW64k9Y1MG+l7WHreIj7+qs1HSGR2F1svbEz0Z+POsaUbeyujx0O0RHYVFb99eR39wz4cVZvLIhPTX9CquPa09XuvaYdNFm+5NoXdHLj7CofO2Jfaw9k03xbclojbn8CfMaHey3N13WnuLFc1tX9PIqLCpfeyqil7JYV9pHy35OzWflXVhU+dzTyD8ULsQfeWwFEVaLdoujtuXaUzRqjD/ZR+mSFUpYlE3uKXoXbjyuK3qFFBZ1YBzo/vPiZd3rtdJRumSFFuY1NK49+Vf0XoB1Ra8ZCIvK157Nv2tP8RU90Lqi14yE1ce1p/jOVTSflviK7lyzExZ1uX2Tf+SFXFf0+g+u1d6BwWzDwAAAAABJRU5ErkJggg==" alt="CSS" />
                        </div>
                        <div>
                          <p>CSS</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFRO1lwENHcC2oeVqPSStuSBR-k3AwzhXOg&usqp=CAU" alt="javascript" />
                        </div>
                        <div>
                          <p>JavaScript</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src="data:image/png;base64,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" alt="netlify" />
                        </div>
                        <div>
                          <p>Netlify</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLo3ft2ow2SVABeljs3AoCOAn2DkiDxRctfg&usqp=CAU" alt="github" />
                        </div>
                        <div>
                          <p>GitHub</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="btn">
                    <button>
                      <h3>
                        <a
                          href="https://github.com/lokesh-patidar/getharvest.com"
                          target="_blank"
                        >
                          <FaGithub /> GitHub Repo
                        </a>
                      </h3>
                    </button>
                    <button>
                      <h3>
                        <a
                          href="https://monumental-sprinkles-d71af9.netlify.app/"
                          target="_blank"
                        >
                          <FaLink /> Diployed Link
                        </a>
                      </h3>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <br />
            <br />

            <div className="projectItem1">
              <div className="projectImage">
                <img src={naukari} alt="" />
              </div>
              <div className="projectDetails">
                <h2>Clone of naukari.com website</h2>
                <div className="desc">
                  <span>Description</span>
                  <br />
                  Naukri.com is a recruitment platform that provides hiring-related services to corporates/recruiters, placement agencies, and job seekers in India and overseas. It offers multiple products like Resume Database Access, Job Listings, and Response Management Tools. Here is the clone ofth real website that I made with the help of react, chakra-ui and javascript mostly.
                </div>
                <div className="functionality">
                  <h3>Functionality</h3>
                  <li>Users can Login </li>
                  <li>Fully responsive</li>
                </div>
                <div className="techStacks">
                <div className="tech-stacks">
                    <h3>Tech-Stacks & Tools used</h3>
                    <div>
                      <div className="languages">
                        <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_3V0WmaHi7hLENYgmyF3iKWD7BP4bn82grA&usqp=CAU" alt="html" />
                        </div>
                        <div>
                          <p>HTML</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src="data:image/png;base64,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" alt="CSS" />
                        </div>
                        <div>
                          <p>CSS</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFRO1lwENHcC2oeVqPSStuSBR-k3AwzhXOg&usqp=CAU" alt="javascript" />
                        </div>
                        <div>
                          <p>JavaScript</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src="data:image/png;base64,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" alt="netlify" />
                        </div>
                        <div>
                          <p>Netlify</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLo3ft2ow2SVABeljs3AoCOAn2DkiDxRctfg&usqp=CAU" alt="github" />
                        </div>
                        <div>
                          <p>GitHub</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="btn">
                    <button>
                      <h3>
                        <a
                          href="https://github.com/lokesh-patidar/naukari.com"
                          target="_blank"
                        >
                          <FaGithub /> GitHub Repo
                        </a>
                      </h3>
                    </button>
                    <button>
                      <h3>
                        <a
                          href="https://ornate-flan-0416fa.netlify.app/"
                          target="_blank"
                        >
                          <FaLink /> Diployed Link
                        </a>
                      </h3>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <br />
            <br />

            <div className="projectItem">
              <div className="projectImage">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU7MIXZ9nXcL0E8Sn4fg_jI2Wh5SQx-P_4pFGw3M92JCn_sow8zNEEf20w_TXvGjD7PQ0&usqp=CAU"
                  alt=""
                />
              </div>
              <div className="projectDetails">
                <h2>Clone of Lorem, ipsum.com website</h2>
                <div className="desc">
                  <span>Description</span>
                  <br />
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti optio placeat quisquam blanditiis laborum. Nulla rem ad
                  libero alias blanditiis.
                </div>
                <div className="functionality">
                  <h3>Functionality</h3>
                  <li>Users can add product items to cart </li>
                  <li>Users can check their items in cart page </li>
                  <li>Users can remove the items as well from cart page</li>
                </div>
                <div className="techStacks">
                  <div className="tech-stacks">
                    <h3>Tech-Stacks & Tools used</h3>
                    <div>
                      <div className="languages">
                        <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_3V0WmaHi7hLENYgmyF3iKWD7BP4bn82grA&usqp=CAU" alt="html" />
                        </div>
                        <div>
                          <p>HTML</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src="data:image/png;base64,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" alt="CSS" />
                        </div>
                        <div>
                          <p>CSS</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFRO1lwENHcC2oeVqPSStuSBR-k3AwzhXOg&usqp=CAU" alt="javascript" />
                        </div>
                        <div>
                          <p>JavaScript</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src="data:image/png;base64,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" alt="netlify" />
                        </div>
                        <div>
                          <p>Netlify</p>
                        </div>
                      </div>
                      <div className="languages">
                        <div>
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLo3ft2ow2SVABeljs3AoCOAn2DkiDxRctfg&usqp=CAU" alt="github" />
                        </div>
                        <div>
                          <p>GitHub</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="btn">
                    <button>
                      <h3>
                        <a href="#" target="_blank">
                          <FaGithub /> GitHub Repo
                        </a>
                      </h3>
                    </button>
                    <button>
                      <h3>
                        <a href="#" target="_blank">
                          <FaLink /> Diployed Link
                        </a>
                      </h3>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr id="contactPageSection" />
    </div>
  );
};
