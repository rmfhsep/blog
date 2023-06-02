import { useRef, useState } from "react";
import Layout from "../../components/Layout";
import Link from "next/link";


export default function Wtire() {
    const idRef = useRef(null)
    const titleRef = useRef(null);
    const contentRef = useRef(null);

    const [showLink, setShowLink] = useState(false)


    const handleSubmit =(event) => {
        event.preventDefault()
        const id = idRef.current.value
        const title= titleRef.current.value;
        const content = contentRef.current.value;

        if(id && content && title) {
            fetch('/api/post/write', {
                method : "POST",
                headers : {'Content-Type' : 'application/json'},
                body: JSON.stringify({id, title,content})
            }).then((res) => {
                if(res.ok) {
                    return res.json();
                }
                throw new Error('Fetch Error')
            })
            .then((data) => {
                setShowLink(true)
                alert(data.message)
            })
            .catch((error) => alert(`request error : ${error}`))
        }
    }

    return (
      <Layout>
        <h1>Write a post</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="id"
            placeholder="id"
            required
            ref={idRef}
            className="mt-2"
          />
          <br />
          <input
            type="text"
            name="title"
            placeholder="title"
            required
            ref={titleRef}
            className="mt-2"
          />
          <br />
          <textarea
            type="text"
            name="content"
            placeholder="content"
            required
            ref={contentRef}
            className="w-3/4 mt-2"
          />
          <br />
          <input type="submit" value="Create" />
        </form>
        {showLink && (
          <Link href={`/posts/${idRef.current.value}`}>Created Posts</Link>
        )}
      </Layout>
    );
}