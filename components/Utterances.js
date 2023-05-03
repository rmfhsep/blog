import { memo } from "react"

function Utterances () {
    return (
        // <script src="https://utteranc.es/client.js"
        // repo="rmfhsep/blog"
        // issue-term="pathname"
        // theme="github-dark-orange"
        // crossorigin="anonymous"
        // async>
        // </script>
        <section 
            ref={(elem) => {
                if(!elem) {
                    return  
                } 
                const scriptElement = document.createElement('script')
                scriptElement.src = 'https://utteranc.es/client.js'
                scriptElement.async = true
                scriptElement.setAttribute('repo' , "rmfhsep/blog")
                scriptElement.setAttribute('issue-term' , "pathname")
                scriptElement.setAttribute('theme' , "github-dark-orange")
                scriptElement.crossOrigin = 'anonymous'
                elem.appendChild(scriptElement)
            }}
        />
    )
}

export default memo(Utterances)