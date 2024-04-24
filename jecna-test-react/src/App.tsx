/*
import './App.css'
import { AppShell, Burger, Group, Skeleton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import React from 'react';

function App() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      footer={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      aside={{ width: 300, breakpoint: 'md', collapsed: { desktop: false, mobile: true } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <MantineLogo size={30} />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        Navbar
        {Array(15)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={28} mt="sm" animate={false} />
          ))}
      </AppShell.Navbar>
      <AppShell.Main>
        Aside is hidden on on md breakpoint and cannot be opened when it is collapsed
      </AppShell.Main>
      <AppShell.Aside p="md">Aside</AppShell.Aside>
      <AppShell.Footer p="md">Footer</AppShell.Footer>
    </AppShell>
  );
}
export default App
*/
import './App.css'
import React from "react";
import Card from "./components/Card";

const cardsData = [
    {
      title: "Karta 1",
      imageSrc: "obrazek.png",
      text: "Text karty 1.",
    },
    {
      title: "Karta 2",
      imageSrc: "obrazek.png",
      text: "Text karty 2.",
    },
    {
      title: "Karta 3",
      imageSrc: "obrazek.png",
      text: "Text karty 3.",
    },
  ];
  
  const App: React.FC = () => {
    return (
      <div className="app">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            imageSrc={card.imageSrc}
            text={card.text}
          />
        ))}
      </div>
    );
  };
  
export default App;
