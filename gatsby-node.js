const path = require(`path`)
exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
    const releaseTemplate = path.resolve(`src/templates/ReleaseTemplate.jsx`);
  //   const resultMD = await graphql(`
  //   {
  //     allMarkdownRemark(
  //       sort: { order: DESC, fields: [frontmatter___date] }
  //       limit: 1000
  //     ) {
  //       edges {
  //         node {
  //           frontmatter {
  //             path
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)
  //   // Handle errors
  //   if (resultMD.errors) {
  //       reporter.panicOnBuild(`Error while running GraphQL query.`)
  //       return
  //   }
  //   resultMD.data.allMarkdownRemark.edges.forEach(({ node }) => {
  //       createPage({
  //           path: node.frontmatter.path,
  //           component: blogPostTemplate,
  //           context: {}, // additional data can be passed via context
  //       })
  //   })



    // docx
    const resultDocx = await graphql(`
        {
      allDocx {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  `);
    // Handle errors
    if (resultDocx.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`);
        return
    }

    const prodPrefix = /^【公開】/;

    resultDocx.data.allDocx.edges.forEach(({ node }) => {


        let isDraft = true;

        // ファイル名にprodPrefixがついてない場合、/draft配下に振り分ける
        let url = "draft/release/";
        let name = node.name.replace(prodPrefix, ()=> {
            url = "release/";
            isDraft = false;
            return "";
        });
        const path = url + name;

        createPage({
            path: path,
            component: releaseTemplate,
            context: {
                id: node.id,
                isDraft: isDraft,
            },
        })
    })
}
