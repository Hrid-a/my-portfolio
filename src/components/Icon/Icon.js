import React from 'react';
import Image from 'next/image';

import Html from '../../../public/html.svg'
import Css from "../../../public/css.svg";
import JavaScript from "../../../public/javascript.svg";
import Express from "../../../public/express.svg";
import ReactJs from "../../../public/react.svg";
import Tailwindcss from "../../../public/tailwindcss.svg";
import Github from "../../../public/github.svg";
import Git from "../../../public/git.svg";
import Vscode from "../../../public/vscode.svg";
import Sql from "../../../public/sql.svg";
import Mongo from "../../../public/mongo.svg";
import Mongoose from "../../../public/mongoose.png";
import Next from "../../../public/next.svg";
import CssInJs from "../../../public/cssinjs.svg";
import VisuallyHidden from '../VisuallyHidden';

const ICONS = {
  html: Html,
  'css': Css,
  'javaScript': JavaScript,
  'react': ReactJs,
  tailwindcss: Tailwindcss,
  express: Express,
  github: Github,
  git: Git,
  vscode: Vscode,
  sql: Sql,
  mongodb: Mongo,
  mongoose: Mongoose,
  next: Next,
  'css-in-js': CssInJs,
}

function Icon({ icon, title }) {
  const component = ICONS[icon];

  return <div title={title}>
    <VisuallyHidden>
      this is a {title} illustaration
    </VisuallyHidden>
    <Image
      src={component}
      width={500}
      height={550}
      alt={`an image of ${title}`}
    // placeholder="blur"
    />
  </div>;
}

export default Icon;
