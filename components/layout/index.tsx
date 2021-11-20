import React, { ReactNode } from 'react'
import Head from 'next/head'
import Navbar from './Navbar';

type Props = {
  children?: ReactNode
  title?: string
  description?: string
}

function Layout({ children, title = 'Tasker', description = "Task manager, reminders and calendar app" }: Props) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta charSet="utf-8" />
        <script defer src="theme.js"></script>
        <link rel="icon" href="favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <Navbar />
        <main>
          {children}
        </main>
    </div >
  )
}

export default Layout
