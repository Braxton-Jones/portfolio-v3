import annapolis from '@/public/image1.jpg'
import me from '@/public/image2.png'
import us from '@/public/image3.png'
import Image from 'next/image'
import arrow from '@/public/arrow.svg'
import Link from 'next/link'

export default function About() {
    return (
        <section className="mx-5 max-w-screen-sm">
            {/* About */}
            <div className="relative">
                <>
                    <h2 className="font-montserrat text-2xl font-bold text-white">
                        About Me
                    </h2>
                    <p className="font-inconsolata text-sm text-colorone">
                        Learn a little more about me.
                    </p>
                </>
                {/* Images */}

                <div className="mt-4 grid grid-cols-2 grid-rows-2 gap-2">
                    <div
                        className="h-28 w-full rounded-md bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: `url(${annapolis.src})`,
                        }}
                    />
                    <div
                        className="row-span-2 h-full w-full rounded-md bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: `url(${me.src})`,
                        }}
                    />
                    <div
                        className="h-28 w-full rounded-md bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: `url(${us.src})`,
                        }}
                    />
                </div>
            </div>

            {/* Details */}
            <div className="mt-10">
                <h5 className="w-min rounded-sm bg-colorone px-1 font-montserrat text-xs font-bold">
                    About
                </h5>
                <p className="my-3 font-inconsolata text-colorone">
                    {`Hello! I'm Braxton Jones, a software engineer based in
                    Maryland.`}
                </p>
                <p className="my-3 font-inconsolata text-colorone">
                    {`I have a passion for web experiences that feel consistent &
                    effortless. I'm always looking for new ways to incorporate
                    that into my work.`}
                </p>
                <p className="my-3 font-inconsolata text-colorone">
                    {`Besides coding, I enjoy web design and how it can be used to
                    create a more enjoyable experience for the user.`}
                </p>
                <p className="my-3 font-inconsolata text-colorone">
                    {`When I'm not at the desk, I produce music, attempt to DJ,
                    and read.`}
                </p>
            </div>

            {/* Connect */}
            <div className="mt-10">
                <h5 className="w-min rounded-sm bg-colorone px-1 font-montserrat text-xs font-bold">
                    Connect
                </h5>
                <p className="my-3 font-inconsolata text-colorone">
                    {`Don't hesitate to reach out via `}
                    <a
                        href="mailto:braxtonjonesdev@gmail.com"
                        className="font-bold underline hover:text-purple-200"
                    >
                        email
                    </a>{' '}
                    if you have any questions or just want to chat.
                </p>
                <p className="my-3 font-inconsolata text-colorone">
                    You can also find me on other platforms using the handle{' '}
                    <a
                        className="font-bold underline hover:text-purple-200"
                        href="https://twitter.com/brxjonesdev"
                    >
                        @brxjonesdev.
                    </a>
                </p>
            </div>
        </section>
    )
}
