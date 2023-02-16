import { Heading, Text } from '@ignite-ui/react'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import previewImg from '../../assets/app_preview.png'
import { ClaimUsernameForm } from './components/ClaimUsernameForm'
import { Container, Hero, Preview } from './styles'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Descomplique sua agenda"
        description="Conecte seu calendário e permita que as pessoas marquem agendamentos
        no seu tempo livre."
      />
      <Container>
        <Hero>
          <Heading as="h1" size="4xl">
            Agendamento descomplicado
          </Heading>
          <Text security="xl">
            Conecte seu calendário e permita que as pessoas marquem agendamentos
            no seu tempo livre.
          </Text>

          <ClaimUsernameForm />
        </Hero>
        <Preview>
          <Image
            src={previewImg}
            alt="Calendário simbolizando o funcionamento da aplicação"
            height={400}
            quality={100}
            priority
          />
        </Preview>
      </Container>
    </>
  )
}
