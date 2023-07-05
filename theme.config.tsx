import React from "react"
import { DocsThemeConfig } from "nextra-theme-docs"

const config: DocsThemeConfig = {
  logo: (
    <>
      <svg
        width="44"
        height="34"
        viewBox="0 0 54 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M40.1214 4.99159L35.9514 9.98329L40.6964 15.6011L45.4413 21.219L49.5912 16.306C51.8736 13.604 53.741 11.3394 53.741 11.2738C53.741 11.2081 51.6148 8.64458 49.0162 5.57711L44.2915 0L40.1214 4.99159ZM4.42595 10.0008L0.259277 14.9443L12.482 29.4721L24.7048 44L28.9233 39.0036L33.1418 34.0072L20.9175 19.5323C14.1941 11.571 8.67052 5.0573 8.64283 5.0573C8.61513 5.0573 6.71753 7.28183 4.42595 10.0008ZM24.5179 10.0008L20.3444 14.9443L27.86 23.9229L35.3755 32.9015L39.6087 27.8899L43.8417 22.8785L36.3172 13.9678C32.1789 9.06706 28.77 5.0573 28.7421 5.0573C28.7142 5.0573 26.8133 7.28183 24.5179 10.0008Z"
          fill="currentColor"
        />
      </svg>
      <span style={{ marginLeft: "15px" }}>WeaveDB</span>
    </>
  ),
  project: {
    link: "https://weavedb.dev/",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 54 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M40.1214 4.99159L35.9514 9.98329L40.6964 15.6011L45.4413 21.219L49.5912 16.306C51.8736 13.604 53.741 11.3394 53.741 11.2738C53.741 11.2081 51.6148 8.64458 49.0162 5.57711L44.2915 0L40.1214 4.99159ZM4.42595 10.0008L0.259277 14.9443L12.482 29.4721L24.7048 44L28.9233 39.0036L33.1418 34.0072L20.9175 19.5323C14.1941 11.571 8.67052 5.0573 8.64283 5.0573C8.61513 5.0573 6.71753 7.28183 4.42595 10.0008ZM24.5179 10.0008L20.3444 14.9443L27.86 23.9229L35.3755 32.9015L39.6087 27.8899L43.8417 22.8785L36.3172 13.9678C32.1789 9.06706 28.77 5.0573 28.7421 5.0573C28.7142 5.0573 26.8133 7.28183 24.5179 10.0008Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  chat: {
    link: "https://discord.com/invite/YMe3eqf69M",
  },
  docsRepositoryBase: "https://github.com/drumfeet/nextra-test/blob/main",
  footer: {
    text: "WeaveDB Docs",
  },
}

export default config
