import { Footer } from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import { Metadata } from "next";
import Link from "next/link";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

export const metadata: Metadata = {
  title: "Ensuring Your App's Robustness",
  description:
    "A few tips to maximize your app's utility in meeting the demands of modern digital business requirements.",
  keywords: [
    "robust application",
    "performance",
    "optimization",
    "clean architecture",
    "efficiency",
  ],
};

export default function Blog() {
  return (
    <main className="flex flex-col justify-between px-6 md:pt-12 pt-6 max-w-screen-lg mx-auto">
      <Navbar />
      <h2 className="text-center text-2xl font-semibold mt-10">
        Ensuring Your App&apos;s Robustness
      </h2>
      <p className="text-end mt-5 text-teal-600">May 5, 2024</p>
      <div className="mt-7 mb-32 text-gray-200 text-lg">
        <p className="indent-5 text-justify">
          We&apos;ve entered an era where software can be immensely critical,
          often forming the backbone of vast business processes. Nowadays, many
          individuals rely on apps for their livelihoods. Developing a robust
          app capable of handling a substantial volume of requests, seamlessly
          integrating new features, and maintaining stability for continuous
          24/7 use has become more crucial than ever before. Fortunately,
          numerous tools are available to help address this challenge. However,
          before introducing further complexity to your code base, it&apos;s
          essential to consider a few tips to maximize your app&apos;s utility
          in meeting the demands of modern digital business requirements.
        </p>

        <p className="text-xl font-medium pt-3 pb-1 text-teal-600">
          Performance Matters
        </p>
        <p className="indent-5 text-justify">
          In server-side applications, performance is one of the most important
          factors to consider when aiming to handle high-traffic apps. Many
          people agree with the sentiment that &ldquo;premature optimization is
          the root of all evil&ldquo;, but ignoring poor performance in your app
          implementation can lead to undetectable problems over time.
          Sacrificing your app&apos;s runtime execution time in favor of
          developer velocity is a reasonable choice in the early stages of
          development when you need to deliver your app as soon as possible.
          However, if your user base grows rapidly and your app becomes very
          slow or unable to handle requests, you may lose your loyal customers
          and miss out on opportunities to profit from your business. Nowadays,
          many people don&apos;t want to wait longer than 2 seconds and are
          quick to develop trust issues. Improving your app&apos;s performance
          may not be as challenging as you think, especially if you&apos;re
          already familiar with the patterns. Spending a few minutes to find the
          best practices for enhancing performance can save you a lot of time
          and money in the future, allowing you to focus on adding new features
          rather than fixing old code that consumes too many system resources.
          Creating the Right Data Structures A data structure is a specialized
          format for organizing, processing, retrieving and storing data. There
          are several basic and advanced types of data structures, all designed
          to arrange data to suit a specific purpose. Data structures make it
          easy for users to access and work with the data they need in
          appropriate ways. Most importantly, data structures frame the
          organization of information so that machines and humans can better
          understand it [1].
        </p>

        <p className="text-xl font-medium pt-3 pb-1 text-teal-600">
          Creating the Right Data Structures
        </p>
        <p className="indent-5 text-justify">
          Choosing the optimal data structure in your code should be among the
          first considerations to ensure your app is scalable and performs well.
          Most apps with a large user base also handle vast amounts of data,
          with the interaction between the backend and database often being the
          most resource-intensive aspect of applications with complex business
          logic. An optimized data structure can simplify queries and require
          less post-processing, leading to improved performance and reduced
          hosting costs. Additionally, it enhances the developer experience by
          minimizing the need for transforming requests or responses to meet
          application service requirements or API response standards. However,
          there&apos;s no one-size-fits-all solution for every application.
          Different requirements demand different solutions, and as the
          developer, you must thoroughly analyze every potentially complex query
          required for building the app and determine the best solution to
          reduce complexity while meeting all business requirements.
        </p>

        <p className="text-xl font-medium pt-3 pb-1 text-teal-600">
          Query Optimization
        </p>
        <p className="indent-5 text-justify">
          Query optimization plays a crucial role in improving the performance
          of database systems, enabling efficient data processing and analytics.
          By selecting the optimal execution plan, query optimization can
          significantly reduce the time required to retrieve and analyze data,
          resulting in faster response times and improved overall system
          performance [2]. Optimizing your query execution should be the first
          step when encountering poor performance in any endpoint of your app.
          Overload data transfer between the database and backend is a common
          issue in intensive data systems. Paying attention to using dynamic
          query selection or retrieving only specific fields and relations
          required can enhance your query performance. For common use cases like
          scanning, sorting, or joining data, utilizing indexing methods to
          store a subset of columns in your table in a sorted order can expedite
          data retrieval compared to scanning the entire table. Moreover, for
          tables that have grown too large, employing table partitioning can be
          the best solution. Table partitioning is a database feature that
          allows a table&apos;s data to be split into smaller physical tables,
          acting as a single large table. This feature improves performance by
          reducing the data that needs to be scanned by the database system and
          enhancing the capability of bulk data mutation.
        </p>

        <p className="text-xl font-medium pt-3 pb-1 text-teal-600">
          Wisely Using Reusable Functions
        </p>
        <p className="indent-5 text-justify">
          Reusable functions are pieces of code that can be utilized across
          different applications or contexts without significant modification.
          They help save time, enhance quality, and promote consistency in
          software projects. However, as software developers, we sometimes tend
          to overuse this clean code pattern in an attempt to make our code more
          readable and reduce the number of lines.This habit can backfire if
          we&apos;re not cautious about the increased complexity that may arise
          when writing overly generic code with numerous state checkers or
          complicated logic determinations. Utilizing high-level language
          features like generics and reflection in reusable functions can
          potentially increase app compile and run-time performance, though the
          difference might not always be noticeable.Excessive reliance on
          reusable functions and abstractions can result in code that is easy to
          read but challenging to maintain and debug. Unusual abstractions also
          raise the barrier to entry for new team members joining our project.
          Sometimes, experienced developers who solely maintain their code base
          tend to create unique patterns or unnecessary automations that can
          hinder the development process if they break or become incompatible
          with new features that need to be added. Therefore, opting for
          standard and conventional solutions most of the time is often the best
          approach to getting the job done efficiently.
        </p>

        <p className="text-xl font-medium pt-3 pb-1 text-teal-600">
          Minimizing Package Dependencies
        </p>
        <p className="indent-5 text-justify">
          Package dependency refers to a package installed on the development
          system and used within the project. In today&apos;s modern era of
          software development, it&apos;s relatively easy to find open-source
          code to fulfill our basic and common requirements for building
          software. However, this abundance of choices can often lead to
          confusion, as many packages offer similar solutions with comparable
          implementations and APIs. While using package dependencies can seem
          convenient, it can incur unexpected costs if tightly coupled with your
          codebase and difficult to refactor or replace. For instance, if you
          rely on a package that is rarely maintained and your programming
          language introduces new features you wish to implement, conflicts may
          arise if the package relies on an outdated version of the language.
          Moreover, when a new version of the package is released, it might
          break your codebase due to unconventional implementations that not
          addressed in the package&apos;s migration changelog. Addressing such
          issues can consume days or even weeks as you navigate GitHub issues
          seeking solutions, especially if you lack a deep understanding of the
          package&apos;s inner workings. While implementing solutions from
          scratch may initially require more time, it can ultimately save time
          in the long run if executed effectively. However, for packages that
          are widely used, proven to be robust, and easy to extend, reinventing
          the wheel may not be necessary. Prioritizing core business needs and
          client requirements remains the primary strategy for project survival.
        </p>
        <p className="text-xl font-medium pt-3 pb-1 text-teal-600">
          Reordering Code Execution Sequence
        </p>
        <p className="indent-5 text-justify">
          When it comes to solving problems, especially in software development,
          we often write the logical implementation sequence as we think of it.
          While this may make the code easier to write and understand, it&apos;s
          not necessarily the best approach for creating robust software.
          Instead, it&apos;s essential to rethink how we order our code
          execution to achieve better results. The first consideration should
          always be to utilize all guard clauses and validators upfront, if
          possible. If your code mutates persistent data and a validator cancels
          the process later on, it can be challenging to rollback the data and
          ensure that no other processes relying on it are affected. Personally,
          I tend to order my validators from the most error-prone to stop the
          process early in execution and then return it to authorized processes.
          This approach can save resources and execution time. To facilitate
          easy reordering of code, implementing the Single Responsibility
          Principle (SRP) in your codebase is crucial. SRP states that a module
          should be responsible for one, and only one, purpose. This principle
          allows you to encapsulate logic that is easier to understand and
          manage. Lastly, ensuring that every state is immutable is essential.
          This is a fundamental principle of functional programming that is
          highly useful in the real world. Implementing immutable state makes it
          easier to reorder code execution without worrying about the impact on
          your data.
        </p>
        <p className="text-xl font-medium pt-3 pb-1 text-teal-600">
          Conclusion
        </p>
        <p className="indent-5 text-justify">
          In this modern era, creating a stable, reliable, and robust
          application is more crucial than ever before. Many individuals and
          businesses cannot afford to risk their operations on software with a
          poor reputation. This article is written to provide insights on
          minimizing the fragility of your application based on my experience.
          Hopefully, it also raises awareness of potential pitfalls that can
          make your code less robust, unscalable, and difficult to maintain.
        </p>
        <hr className="h-px my-2 bg-gray-300 border-0 mt-5" />
        <p className="text-xl font-medium  pb-1 text-teal-600">References:</p>
        <ul className="list-decimal ml-5">
          <li>
            &ldquo;Data Structure Definition&ldquo; - TechTarget. Available at{" "}
            <Link
              className="text-teal-600"
              href="https://www.techtarget.com/searchdatamanagement/definition/data-structure"
            >
              link
            </Link>
          </li>
          <li>
            &ldquo;Query Optimization&ldquo; - Dremio Wiki. Available at{" "}
            <Link
              className="text-teal-600"
              href="https://www.dremio.com/wiki/query-optimization/"
            >
              link
            </Link>
          </li>
        </ul>
      </div>
      <div className="mb-5">
        <Link
          className="flex items-center gap-3 text-teal-600 hover:underline underline-offset-4 mx-3"
          href={"/"}
        >
          <MdOutlineKeyboardBackspace />
          <span>back to main page</span>
        </Link>
      </div>
      <Footer />
    </main>
  );
}
