import { MDXProvider } from "@mdx-js/react";
import {
  Typography,
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  Link,
} from "@material-ui/core";

interface MDXLayoutProps {
  children: React.ReactNode;
}
// @see https://mdxjs.com/table-of-components
const components = {
  p: (props) => <Typography {...props} />,
  h1: (props) => <Typography variant="h1" {...props} />,
  h2: (props) => <Typography variant="h2" {...props} />,
  h3: (props) => <Typography variant="h3" {...props} />,
  h4: (props) => <Typography variant="h4" {...props} />,
  h5: (props) => <Typography variant="h5" {...props} />,
  h6: (props) => <Typography variant="h6" {...props} />,
  //thematicBreak: Typography,
  //blockquote: Typography,
  //ul: List,
  //ol: ListItem,
  //li: ListItem,
  table: Table,
  thead: TableHead,
  tbody: TableBody,
  tr: TableRow,
  "td/th": TableCell,
  // pre: Typography,
  // code: Typography,
  // em: Typography,
  // strong: Typography,
  //del: Typography,
  //inlineCode: Typography,
  //hr: Typography,
  a: Link,
  //img: Typography,
};
export default ({ children }: MDXLayoutProps) => {
  return (
    <MDXProvider components={components}>
      <div className="MDXProvider root">{children}</div>
      <style jsx>{`
        .MDXProvider.root {
          margin: 32px auto;
          max-width: 1200px;
        }
      `}</style>
    </MDXProvider>
  );
};
