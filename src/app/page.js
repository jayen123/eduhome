import Image from "next/image"
export default function Home() {
  return (
      <>
        <section>
            <div className='container'>
                <div>
                    <div>
                        <h1>InVesting   In knowledge and your future</h1>
                        <p>
                          Saving World with Good Designs. Because your satisfaction is everything.
                        </p>
                        <button>Get Started</button>
                    </div>
                    <div>
                        <div>
                            <Image src="/plus.png" width={50} height={50} alt="plus"/>
                        </div>
                        <div>
                            <></>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </>
  )
}
