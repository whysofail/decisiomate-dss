import Link from "next/link";
export const metadata = {
  title: 'DecisioMate',
  description: 'Make your own DSS with Simple Additive Weight Method'
}
const Index = () => {
  return (
    <>
      <div className="hero min-h-screen  bg-white">
        <div className="hero-content text-center">
          <div className="max-w-fit">
            <h1 className="text-6xl sm:text-9xl font-bold">DecisioMate</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div className="py-4">
            </div>
            <button className="btn btn-primary">
              <Link href="/alternative">Get started</Link>
            </button>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
