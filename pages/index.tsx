import Header from "../components/Header"
import Form from "../components/Form";
import PostFeed from "../components/posts/PostFeed";

export default function Home() {
  return (
    <>
     <Header showBackArrow label="Home" />
     <Form placeholder="Whats happening?" />
     <PostFeed/>
    </>
  )
}
