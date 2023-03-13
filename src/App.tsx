import { useState, useEffect } from 'react'

import { AiOutlineFileText, AiFillLinkedin, AiFillInstagram, AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai'

import Nav from './components/nav'
import CardProject from './components/cardProject'
import CardSkill from './components/cardSkill'
import NavMobile from './components/navMobile'

import PersonIMG from './assets/imgs/vitor.png'
import CodeIMG from './assets/imgs/code.png'
import PrintROCK from './assets/imgs/print_rock.png'
import PrintWEATHER from './assets/imgs/print_weatherapp.png'
import PrintWATER from './assets/imgs/print_drinkwater.png'
import PrintPASS from './assets/imgs/print_generator.png'

import { HeroSection, ProjectionSection, SkillsSection, AboutSection, ContactSection } from './style'
import MyContextMenu from './context/myContext';


function App() {

  const [menuIsVisible, setMenuIsVisible] = useState(false)

  useEffect(() => {
  }, [])

  return (
    <>
      <MyContextMenu.Provider value={{ menuIsVisible, setMenuIsVisible }}>
        <NavMobile />
        <HeroSection>
          <Nav />
          <div className='content max-width'>
            <div className="text-container">
              <h1>Olá, bem-vindo a <b>minha página</b>! Meu nome é Vitor Santos e sou <b>desenvolvedor full stack</b>.</h1>
              <p>Desde criança sempre gostei de desafios e foi na programação que me encontrei, onde eu consigo transformar desafios em solução que ajudam pessoas!
                Gosto de muito de fazer isso atráves de React, Node, MongoDB, MySQL e etc.</p>
              <a href="#projetos"><AiOutlineFileText style={{ marginRight: 10, marginLeft: -5 }} /> VER PROJETOS</a>
            </div>
            <div className="person">
              <img src={CodeIMG} alt="" className='jump-animation' />
            </div>
          </div>
        </HeroSection>

        <ProjectionSection id='projetos'>
          <h2>Meus Projetos</h2>

          <div className="projects max-width" >
            <CardProject type="React" name="Weather APP" description="Um WebApp (focado em mobile) de Clima desenvolvido em React JS sem auxilio de tutorial ou curso para fixar o aprendizado de controle de useState(), useEffect() e PRINCIPALMENTE o consumo de API." image={PrintWEATHER} reading='https://github.com/ivitorsantos/weather-webapp' demo="https://gleaming-gecko-d9621c.netlify.app/" />
            <CardProject type="React" name="Rock, Paper and Scissors" description="Um WebApp do jogo pedra, papel e tesoura desenvolvido em React JS sem auxilio de tutorial para fixar o aprendizado de controle de estados e o uso do Hook useEffect()." image={PrintROCK} reading="https://github.com/ivitorsantos/rock-paper-scissors" demo="https://jolly-faloodeh-b45d76.netlify.app/"/>
            <CardProject type="Javascript" name="Beba Água" description="Projeto em javascript feito para definir a quantidade de agua que eu preciso por dia e controlar a quantidade de agua que eu ingeri durante o dia. A cada dia novo ele reseta a quantidade ingerida." image={PrintWATER} reading='https://github.com/ivitorsantos/oficina' demo="https://peaceful-sable-d94a60.netlify.app/" />
            <CardProject type="Javascript" name="Gerador de senha" description="Projeto feito em javascript vanilla com intuito de gerar senhas fortes para o usuario copiar e colar!" image={PrintPASS} reading='https://github.com/ivitorsantos/oficina' demo="https://lovely-douhua-8e826b.netlify.app/" />
          </div>
        </ProjectionSection>

        <SkillsSection id='habilidades'>
          <h2>Habilidades</h2>
          <div className="skills max-width">
            <CardSkill title='Html' />
            <CardSkill title='Css' />
            <CardSkill title='Javascript' />
            <CardSkill title='Typescript' />
            <CardSkill title='MongoDB' />
            <CardSkill title='SQL' />
            <CardSkill title='React' />
            <CardSkill title='React Native' />
            <CardSkill title='Node' />
            <CardSkill title='Git' />
          </div>
        </SkillsSection>
        <AboutSection>
          <div className="me">
            <img src={PersonIMG} alt="" />
          </div>
          <div className="text">
            <h2>Um pouco sobre min</h2>
            <p>Sou um jovem de 24 anos que tem paixão por programação e um estilo de vida saudável e ativo. Sou apaixonado por resolver problemas por meio da programação, utilizando minhas habilidades de descontruir problemas em pequenas partes e usar o raciocínio lógico para criar soluções inovadoras e eficazes. Sou um desenvolvedor dedicado, sempre buscando se atualizar e aprender novas tecnologias e técnicas para aprimorar minhas habilidades.</p><br/>
            <p>Além disso, sou entusiasta do estilo de vida saudável. Valorizo muito a importância da atividade física e da alimentação saudável para manter um corpo e a mente saudável, pratico regularmente exercícios físicos e tenho alimentação balanceada por acreditar fortemente que um estilo de vida ativo e saudável não só traz benefícios físicos, mas também contribui para uma vida profissional mais produtiva.</p>
          </div>

        </AboutSection>
        <ContactSection id='contato'>
          <h2>Entre em contato!</h2>
          <div className="content max-width">
            <div className="social-media">
              <div className="whatsapp">
                <a href="https://wa.me/5516988572526?text=Ol%C3%A1+Vitor%2C+venho+do+seu+site+Portfolio+e+gostaria+de+falar+com+voc%C3%AA%21" target="_blank"><AiOutlineWhatsApp size={35} color={'#BE4747'} />
                  <span>WhatsApp</span>
                </a>
              </div>
              <div className="linkedin">
                <a href="https://www.linkedin.com/in/ivitorsantos/"><AiFillLinkedin size={35} color={'#BE4747'} />
                  <span>Linkedin</span>
                </a>
              </div>
              <div className="instagram">
                <a href="https://www.instagram.com/ovitor.santos/" target={'_blanc'}><AiFillInstagram size={35} color={'#BE4747'} />
                  <span>Instagram</span>
                </a>
              </div>
              <div className="email">
                <a href='mailto:dev.vitorsantos@gmail.com'><AiOutlineMail size={35} color={'#BE4747'} />
                  <span>E-mail</span>
                </a>
              </div>

            </div>


          </div>
        </ContactSection>
      </MyContextMenu.Provider>
    </>
  )
}

export default App
