import React from "react";
import { Helmet } from "react-helmet-async";

const MetaTag = props => {
    return(

    <Helmet
        title={props.title}
        htmlAttributes={{lang:'ko'}}
        meta={[
              // Google Meta Tags
          { itemProp: 'name', content: props.title },
          { itemProp: 'description', content: props.description },
          { itemProp: 'image', content: props.imgsrc },

          { property: 'og:url', content: `http://ch-wedding.kr/card/${props.url}`},
          { property: 'og:type', content: 'website'},
          { property: 'og:title', content: props.title },
          { property: 'og:site_name', content: props.title },
          { property: 'og:image', content: props.imgsrc },
          { property: 'og:description', content: props.description }

        ]}
        link={[{rel:'canonical', href:`http://ch-wedding.kr/card/${props.url}`}]}
      />
        )
}
  
export default MetaTag;