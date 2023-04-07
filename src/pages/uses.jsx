import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Kalle Pyörälä</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="My tools of trade"
        intro="Things I use every day to get my work done."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="iMac Retina 5K, 27-inch (2017)">
              My trusty workhorse is coming to the end of its life. I’m trying
              to decide if I go Macbook or Mac mini next, both options have the
              downside that I need to buy a new monitor.
            </Tool>
            <Tool title="Keychron K1SE Mechanical Keyboard">
              I’ve been using this keyboard for a year now and it’s been
              fantastic. Flat profile is nice compromise between the traditional
              mechanical keyboard and Apple keyboards.
            </Tool>
            <Tool title="Logitech MX Master 3">
              I’ve been using MX mouses for years and they just keep getting
              better. The MX Master 3 is the best one yet.
            </Tool>
            <Tool title="Bose Noise Cancelling Headphones 700">
              Great for meetings, great for music, great for the days when kids
              are home and you need to get some work done.
            </Tool>
            <Tool title="Blue Snowball iCE">
              I should probably upgrade to a better microphone but this one
              works just fine for my needs.
            </Tool>
            <Tool title="Bose SoundLink Mini">
              I’ve had this speaker for years and it’s still going strong, great
              to have around when headphones start to squeeze your head.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="Kitty">
              I’ve been using Kitty as my terminal emulator for a while now and
              it’s been great. Configuration is so much easier than with iTerm2.
            </Tool>
            <Tool title="Neovim">
              I’m switching back and forth between VS Code and Neovim. I love
              the Vim keybindings and the extensibility of Neovim but I’m not
              native enough to use it as my only editor yet.
            </Tool>
            <Tool title="VS Code">
              Nothing fancy here, just the default VS Code setup with Nord theme
              and some custom bindings.
            </Tool>
            <Tool title="Github Desktop">
              Even I like to do as much as possible in terminal, I like the
              visual diff view in Github Desktop for reviewing code before
              pushing.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Raycast">
              I can’t live without Raycast anymore. There is so many useful
              things you can do with it and it’s so easy to extend. I use it for
              everything from launching apps to generating UUIDs.
            </Tool>
            <Tool title="Obsidian">
              I use Obsidian for writing journal, taking notes and writing
              articles. It’s so easy to link things together and it’s just a joy
              to use.
            </Tool>
            <Tool title="Things 3">
              Things is the best todo app I’ve ever used. It’s so simple and yet
              so powerful. I use it for everything from tracking my daily tasks
              to planning house renovations.
            </Tool>
            <Tool title="Session">
              Simple tool to shut down the distractions and focus on the task at
              hand.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
