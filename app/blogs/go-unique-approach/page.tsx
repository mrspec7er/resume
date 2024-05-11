"use client";

import { Footer } from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import { Variants, motion } from "framer-motion";

export default function Blog() {
  const cardVariants: Variants = {
    offscreen: {
      x: -300,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.7,
        duration: 3,
      },
    },
  };
  return (
    <main className="flex flex-col items-center justify-between px-6 md:pt-12 pt-6 max-w-screen-lg mx-auto">
      <motion.div
        className="card-container mt-10"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0 }}
      >
        <div className="splash" />
        <motion.div className="card" variants={cardVariants}>
          <h2 className="text-center text-2xl font-semibold">
            Exploring the Unique Approach of Go Programming Language
          </h2>
          <div className="mt-10 mb-32 text-gray-200 text-lg">
            <p className="indent-5 text-justify">
              Go, a programming language crafted by Google, stands as a
              testament to the pursuit of enhanced productivity and seamless
              collaboration in software development. Its inception was driven by
              the imperative to accelerate development velocity while fostering
              a culture of cooperation among developers. However, Go has
              combination of efficiency with remarkable performance,
              scalability, and an intuitive approach to low-level concepts.
              Herein a closer look at Go approach to make it unique from another
              programing language.
            </p>

            <p className="text-xl font-medium pt-3 pb-1">
              Simple and Minimalistic
            </p>
            <p className="indent-5 text-justify">
              Go is known for having the least syntax among popular programming
              languages. Its syntax is minimalistic and straightforward. For
              instance, Go doesn't use any syntax to export variables and
              functions to another module, instead, you can simply capitalize
              the name to indicate that the function is accessible to another
              module. In terms of usability, Go is also minimalist yet
              surprisingly easy to understand. For example, its looping syntax
              doesn't include constructs like 'while' or 'map' to define a loop.
              This approach might seem strange to some, but for those who
              already familiar to it, can prefer it more for its clarity and
              readability. However, this minimalistic and simple approach means
              that Go lacks modern features like ternary operators and complex
              type systems. According to Rob Pike, adding more features to Go
              would only increase complexity and make it become similar to other
              languages more closely. Additionally, Go's syntax is inspired by
              Unix. Therefore, if you're familiar with working in the Linux and
              MacOS command-line interfaces, you'll likely find using Go
              commands and file systems intuitive.
            </p>

            <p className="text-xl font-medium pt-3 pb-1">Performance</p>
            <p className="indent-5 text-justify">
              Go introduces Goroutines, a concurrency pattern that allows us to
              write programs that run concurrently, leveraging all CPU resources
              to achieve higher execution speeds. Under the hood, Goroutines
              utilize green threads, which are more 'cost-effective' than actual
              threads provided by the operating system. They can also enable
              Goroutines to run across multiple threads, even if the hardware
              only has one core. Go is renowned as the best language for working
              with large codebases. Go code compiles quicker than most compiled
              languages such as C++ and Rust. This is one of several reasons why
              Go was created at Google in 2009—compile times could consume too
              many resources at Google's scale, and employing an efficient
              programming language was the optimal solution. Furthermore, Go is
              one of the few low-level programming languages that include a
              garbage collector. This unique approach ensures that Go maintains
              decent performance while still offering a relatively simple
              learning curve compared to other languages. Additionally, Go
              allows the use of pointers, providing users with more control over
              memory layout and aiding in identifying mutable states.
            </p>

            <p className="text-xl font-medium pt-3 pb-1">
              Full Featured Standard Library
            </p>
            <p className="indent-5 text-justify">
              Standard library in Go proven to be very useful and one of the
              best among programming languages. The Go developer community often
              recommends utilizing the standard library over third-party
              options, as most of the time, it proves to be the best choice and
              reduces dependence on external code. Go's decision to include all
              necessary and frequently used packages in its standard library is
              one of the features that I appreciate the most. Relying on
              libraries developed by others may not pose a problem for
              short-term projects, but for projects requiring long-term
              maintenance, there's no guarantee that the packages you download
              will still be maintained or functional when updating dependencies.
              This approach also limits us as Go developers in choosing the
              libraries for our projects, researching and selecting a library
              with a solid implementation, the best API, and all the necessary
              features often consumes a significant amount of time and resources
              in the early stages of development. Making the wrong choice of
              framework or library can lead to serious problems in the long
              term. Opinionated frameworks with a lot of features can accelerate
              code development and make it easier for new contributors who are
              already familiar with them to understand the code base. However,
              if you need to employ different patterns, add custom features, or
              integrate with new uncommon services to your chosen framework, it
              can become stressful and time-consuming.
            </p>

            <p className="text-xl font-medium pt-3 pb-1">
              Robust Error Handling
            </p>
            <p className="indent-5 text-justify">
              Error handling is often a point of contention in the Go language,
              which has a unique approach compared to other languages. Go's
              ability to return multiple values at once allows us to manage
              errors and function results using different states. This makes it
              easier to handle each error uniquely and know how to respond at
              every layer of our application. Unlike in other languages, error
              handling in Go is an "opt-out" solution, you must actively choose
              to ignore error returns if a function is prone to errors. This
              approach forces us to be more aware of all possibilities that
              could occur in our application. However, this error handling
              approach is also a point of criticism in Go. When using many error
              checks within one function, the code can appear messy and goes
              against the principle of DRY (Don't Repeat Yourself) code. Based
              on my experience as a software developer, I've found that
              following too strictly and too DRY principles can result in code
              that is easy to read but difficult to maintain. Excessive layers
              of abstraction and polymorphism may make the general purpose of a
              block of code easier to understand but can complicate debug,
              especially when trying to identify the specific code responsible
              for an error. While I can understand the frustration some
              developers may feel with Go's error handling approach,
              particularly in experimental development, I believe it could be
              improved by supporting features like a ternary operator for error
              checking in a single line, instead of the usual if statement which
              typically requires at least three lines to complete.
            </p>

            <p className="text-xl font-medium pt-3 pb-1">Widely Adopted</p>
            <p className="indent-5 text-justify">
              Low-level languages like C, C++, and Rust are versatile and
              capable of developing software for various purposes. However, it's
              uncommon to see these languages used in developing high-level
              software that doesn't require low-level latency and manual memory
              control. When integrating services like payment gateways or
              message brokers, the documentation often favors popular languages
              such as Go, Node.js, and PHP. This preference can influence the
              choice of language, especially if you depend on services that only
              officially support certain languages. Although Go may not be as
              popular as Python and JavaScript but many common tools for
              building scalable, high-traffic software often feature Go in their
              official documentation as an example of API usage. Go isn't
              strictly a high-level language but also doesn't require manual
              memory management in basic use cases. This makes Go well-suited
              for building both low-level tools like Docker, Kubernetes, and
              Fedora Core OS, as well as high-level applications like web
              servers that prioritize business logic. Thanks to its compiler,
              which can produce a single binary file, deploying Go applications
              is straightforward, making Go compatible with various platforms.
              Additionally, Go has native support for services like AWS Lambda,
              alleviating concerns about deployment compatibility.
            </p>

            <p className="text-xl font-medium pt-3 pb-1">Strict Typing</p>
            <p className="indent-5 text-justify">
              Type safety stands out as one of Go's strongest points. Go's
              approach to type safety is not overly complex but remains very
              useful for handling large code base. If you've worked with large
              teams on software development projects, you likely understand the
              challenges of using dynamic types for collaboration. Strict typing
              can facilitate faster progress when working with other people's
              code or unfamiliar external libraries. For those transitioning
              from high-level languages, implementing strict typing may seem to
              add complexity to the code base. In some cases, such as when
              dealing with JSON data or creating prototype models, strict typing
              may present challenges. However, it proves to be incredibly
              helpful and satisfying when aiming to develop robust code. Strict
              typing can make easy think harder but also can make hard think
              easier. However, Go, prioritizing simplicity and performance that
              make Go lacks of certain features such as union types and type
              inference. If you're familiar to statically but weakly typed
              languages like TypeScript, transitioning to Go may require some
              effort due to these missing features. Additionally, strong typing
              can make polymorphic thinking more challenging since you can't
              manipulate the code to satisfy the compiler. This necessity
              prompts Go to implement high-level features like generics to
              address this issues.
            </p>

            <p className="text-xl font-medium pt-3 pb-1">Conclusion</p>
            <p className="indent-5 text-justify">
              Type safety stands out as one of Go's strongest points. Go's
              approach to type safety is not overly complex but remains very
              useful for handling large code base. If you've worked with large
              teams on software development projects, you likely understand the
              challenges of using dynamic types for collaboration. Strict typing
              can facilitate faster progress when working with other people's
              code or unfamiliar external libraries. For those transitioning
              from high-level languages, implementing strict typing may seem to
              add complexity to the code base. In some cases, such as when
              dealing with JSON data or creating prototype models, strict typing
              may present challenges. However, it proves to be incredibly
              helpful and satisfying when aiming to develop robust code. Strict
              typing can make easy think harder but also can make hard think
              easier. However, Go, prioritizing simplicity and performance that
              make Go lacks of certain features such as union types and type
              inference. If you're familiar to statically but weakly typed
              languages like TypeScript, transitioning to Go may require some
              effort due to these missing features. Additionally, strong typing
              can make polymorphic thinking more challenging since you can't
              manipulate the code to satisfy the compiler. This necessity
              prompts Go to implement high-level features like generics to
              address this issues.
            </p>
            <hr className="h-px my-2 bg-gray-300 border-0 mt-5" />
            <p className="text-xl font-medium  pb-1">References:</p>
            <ul className="list-decimal ml-5">
              <li>
                "Go Programming Language (Introduction) - geeksforgeeks
                Available at{" "}
                <a
                  className="text-teal-600"
                  href="https://www.geeksforgeeks.org/go-programming-language-introduction/"
                >
                  link
                </a>
              </li>
              <li>
                "Effective Go" - go.dev. Available at{" "}
                <a
                  className="text-teal-600"
                  href="https://go.dev/doc/effective_go"
                >
                  link
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
      <Footer />
    </main>
  );
}
