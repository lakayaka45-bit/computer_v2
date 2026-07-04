<h1>Lakmal Computer Shop — Computer Parts & Repair Store</h1>

<p><b>Lakmal Computer Shop</b> is a computer parts and repair e-commerce website built with Next.js, Node.js and MySQL. The application is designed for selling computer hardware, components, accessories, and repair services, and it includes a functional admin dashboard. This repository is now customized for a computer shop experience.</p>

<h2>More work</h2>
<a href="https://www.kuzmanovicaleksandar.com" target="_blank">www.kuzmanovicaleksandar.com</a><br />
<a href="https://github.com/Kuzma02/VSD-Official-Website" target="_blank">Car Parts Company Official Website in Next.js</a><br />
<a href="https://github.com/Kuzma02/Luxury-Cosmetics-eCommerce-NextJS" target="_blank">Luxury Cosmetics eCommerce Shop in Next.js</a><br />
<a href="https://github.com/Kuzma02/Free-Admin-Dashboard" target="_blank">Premium Custom Admin Dashboard</a><br />
<a href="https://github.com/Kuzma02/Fashion-eCommerce-Shop-in-React" target="_blank">Premium Fashion eCommerce Shop</a>

<h2>2. Software engineering process</h2>
<p>During the design and modeling of the software, we decided to use the cascade model(waterfall model). We decided on it considering its simplicity, easy project monitoring and easy application of the model. The cascade model is probably the oldest published model. It was first published in 1970 and represents a high level of abstraction. The stages in the model are connected in cascade, and the model itself is organized so that the next level is passed only after the completion of the previous level.</p>

![cascade model photo](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/2c8546ba-b57f-4467-9db9-d09cec46beb2)

<h3>2.1. Defining milestones</h3>
<p>Milestones are key events in the project that show us by what date something must be finished. At this stage, we defined our milestones for every stage in our software engineering process.</p>
<h3>2.2. Plaky - Project management application</h3>
<p>The Plaky application was used for project management and project tracking. It is a free application that facilitates collaboration between team members and enables easy export of project reports in one click.</p>

![plaky image](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/f670fe69-1037-4b8c-a522-047534398e0a)

<h2>3. Requirements analysis</h2>
<h3>3.1. Software requirements specification</h3>
<p>At this stage we defined all our functional and non-functional software requirements regarding to the whole application. Also we defined requirements that define the connections of the system with the environment and performance requirements that the system should meet.</p>
<h3>3.2. Modeling the system with a use case diagram</h3>
<p>The Use Case Diagram represents a detailed description of the functionality of the system in different situations. It describes the steps and actors involved in each situation. The use case diagram is used as a basis for further design, implementation and testing of the software.</p>

![use case diagram github](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/dc578826-4031-4b53-b54c-0c8af3e1710e)

<p>The image above represents our <b>ecommerce website use case diagram</b>. Here we have also defined main success scenarios and alternative scenarios for admin and users.</p>
<h2>4. System design</h2>
<p>System design is the software engineering stage that transforms concepts and requirements into tangible software structures. It is the strategic process of defining the architecture, components, and interactions of a software system to fulfill specific functional and non-functional requirements. In this stage we wrote about the type of system architecture. We defined our front-end and back-end and we wrote about structure of front-end and back-end in our application. We defined our data structures, database structures and important types in our application.</p>

<h2>5. Software implementation</h2>
<p>Software implementation is the process of converting a software design into a functional software system. This is where all programming should begin.
When you are in the software implementation stage, it is important to take care of the internal documentation. This documentation includes headers and comments that provide basic information about the component and explanations of specific parts of code. Thanks to these elements, we are easier to manage in code and we better understand what we have done, which contributes to more efficient work and maintaining software projects.</p>

![products component comments](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/86c22295-64c6-4328-a17a-8f4f0820b8f1)

<h2>6. Testing</h2>
<p>Testing is a formal process that is performed by the testing team with the aim of determining the logical correctness and purposefulness of the tested program. The importance of testing is great because it significantly reduces the losses that software companies have due to errors and failure of software incurred after its delivery to the customer. <b>We have done the entire testing process manually and documented everything in detail.</b></p>

![testing script](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/abb8b25e-89e3-4c1e-a195-fff350d7405f)

<p>The test scripts represent the instructions from which it is clearly seen as a step by step how the testing was performed. They provide full control over testing, so, if some errors or cancellation occurs, testing conditions can be repeated and the system again lead to that error or cancellation. This is necessary to establish the cause of the problem.
As the above image shows, we documented each our test example in terms of test ID, input data, instruction, expected result, actual result, additional comment, component, method and testing technique. Currently, our test script has over 350 manually tested examples.</p>

![errors in testing script](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/507fa099-2039-47ce-a38b-209166a8d5c4)


<p>During the software testing process, we documented each error found in the error report form. As shown in the image above, each error has its own unique error ID and a detailed description of the error containing: date of identifying an error, date of troubleshooting an error, error priority, type of error, file name, testing phase.</p>

<h3>6.1. Ad hoc testing</h3>
<p>The first step in software testing after each new added functionality in our application was ad hoc testing. The ad hoc testing takes place in an unofficial atmosphere. The developer presents the code to the rest of the group and then the discussion occurs. The members of the group ask questions, the developer corresponds to them, together analyze individual implementation aspects that they consider significant and try to find mistakes.
We have applied this method by examining the code after each new added functionality and had long discussions about it and the potential problems that may occur.</p>

<h3>6.2. Component system hierarchy</h3>
<p>The component system hierarchy of the application components is a complete sketch of all components in our application created in Figma design tool. This sketch is very important to us when testing, because it represents an insight into the order of the component testing. The below image represents our component system hierarchy from the bird eye view:</p>

![application component system](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/6d4a009f-746e-4627-a0fd-acf6fc0f15de)

<h3>6.3. Unit testing</h3>
<p>Unit testing for our application includes the process of testing individual functionalities or application components, to ensure each of them work properly independently. The goal of unit testing is to identify and correct errors in the early stages of development, increase the reliability of code and facilitating future application maintenance.</p>

![unit testing stats english](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/94ec4f61-698e-4954-ba35-1336e939864a)

<p>As the image above shows we found a total of 75 errors in unit test of 103 total errors found, which in our testing unit testing had the highest efficiency with 72.8%. During unit testing, we used the black box and the white box method. The techniques we used for testing were:</p>
<p>The black box method:</p>
<ol>
  <li><p>Equivalence partitioning</p></li>
  <li><p>Boundary Value Analysis – BVA</p></li>
</ol>
<p>The white box method:</p>
<ol>
  <li><p>Statement coverage</p></li>
  <li><p>Decision coverage</p></li>
  <li><p>Condition coverage</p></li>
</ol>

<h3>6.4. Integration testing</h3>
<p>In integration testing, we used the approach "Integration from the bottom to top". This is very used approach in integration testing. This method starts from the components of the system organized in the hierarchy on which the main program is located. Testing starts by unit testing all components located at the lowest level in hierarchy. The components are then tested at the next level that calls previously tested components.</p>

![integration testing stats eng](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/4375373b-b67d-4a11-bee4-ff55325c2db7)

<p>As the image above shows we found a total of 28 errors in integration testing of 103 total errors found, which in our testing, integration testing has efficiency with 27.2%.</p>

<h3>6.5. End-to-end testing</h3>
<p>End-to-end testing is the highest, final level of testing. It is checks whether the system, as a whole, acts in accordance with the specification of the requests set by the customer. Since most functional requirements have already been verified at lower levels of testing, now emphasis is on non-functional requirements, such as speed, reliability, efficiency…</p>

<h3>6.6. Error records at a specified time interval</h3>
<p>During testing, we recorded the found mistakes by days. The next diagram helped us know how to know how our testing progresses.</p>

![diagram about erros by days](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/1b99f3f8-d344-48a5-a973-6764b7e3f7bf)

<p>As the image above shows, the number of errors increases day by day, so testing must continue. Throughout 4 days of testing, we managed to find a total of 103 errors.</p>

<h3>6.7. Analysis of errors found</h3>
<p>During testing, we also conducted the error report form that we have already mentioned in the introductory chapter on testing. This document has helped us significantly in order to document all the most common types of mistakes in our application, which shows the image below.</p>

![error frequency](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/d90292b7-579d-4267-a88d-485ee70dc275)

<h2>Singitronic – Key features</h2>
<p>Singitronic is Next.js and Node.js full-stack e-commerce website with a <b>free source code</b>. Our application comes with the fully functional <b>admin panel</b> and it is fully open-source. Our <b>free online store website</b> is completely responsive and manually tested. You can use our e-commerce project as a template or boilerplate for you next project. Our ecommerce shop template and Next.js ecommerce theme is fully customized for all your needs. It is available for <b>free download</b> and can be used as an ecommerce example for all your future projects. </p>
<h3>Is Next.js good for eCommerce?</h3>
<p>Next.js is currently one of the best ways for developing custom eCommerce solutions. It’s benefits include improved performance, SEO-friendliness, easy development and deployment, excellent developer experience, and the ability to handle versatile and scalable projects. By leveraging Next.js, developers can create compelling web applications that deliver an exceptional user experience while maintaining optimal performance.</p>


<h2>Step-by-step video instructions for running the app</h2>

[https://www.youtube.com/watch?v=Ry0aOMws0gE](https://www.youtube.com/watch?v=Ry0aOMws0gE)

<h2>Instructions</h2>
<ol>
  <li><p>To run the app you first need to download and install Node.js and npm on your computer. Here is a link to the tutorial that explains how to install them: <a href="https://www.youtube.com/watch?v=4FAtFwKVhn0" target="_blank">https://www.youtube.com/watch?v=4FAtFwKVhn0</a>. Also here is the link where you can download them: <a href="https://nodejs.org/en" target="_blank">https://nodejs.org/en</a></p></li>
  <li><p>When you install Node.js and npm on your computer you need to download and install MySQL on your computer. Here is another link to the tutorial which explains how you can download and install MySQL on your computer: <a target="_blank" href="https://www.youtube.com/watch?v=BxdSUGBs0gM&t=212s">https://www.youtube.com/watch?v=BxdSUGBs0gM&t=212s</a>. Here is a link where you can download MySQL: <a href="https://dev.mysql.com/downloads/installer/" target="_blank">https://dev.mysql.com/downloads/installer/</a></p></li>
  <li><p>This step is optional, but highly recommended if you don't have a database management app. Because HeidiSQL is beginner-friendly and very easy to use than other database management options. Here is a link to the tutorial which explains how to download and install HeidiSQL: <a href="https://www.youtube.com/watch?v=oJ24MyLeiPs" target="_blank">https://www.youtube.com/watch?v=oJ24MyLeiPs</a> and here is a link where you can download it: <a href="https://www.heidisql.com" target="_blank">https://www.heidisql.com</a></p></li>
  <li><p>When you install all the programs you need on your computer you need to download the project. When you download the project, you need to extract it.</p></li>
  <li><p>After you extract the project, open the project folder in your code editor and create a root <code>.env</code> file.</p></li>
  <li><p>Copy <code>.env.example</code> to <code>.env</code> and update the values with your own credentials.</p></li>
  <li><p>Copy <code>server/.env.example</code> to <code>server/.env</code> and update the database connection string if needed.</p></li>
  <li><p>Install frontend dependencies from the project root:</p>

  ```
  npm install
  ```
  </p></li>
  <li><p>Install backend dependencies from the <code>server</code> folder:</p>

  ```
  cd server
  npm install
  ```
  </p></li>
  <li><p>Create the MySQL database for the app. In MySQL or your database tool, run:</p>

  ```
  CREATE DATABASE lakmal_computer_shop;
  ```
  </p></li>
  <li><p>Initialize Prisma schema from the project root:</p>

  ```
  npx prisma db push
  ```
  </p></li>
  <li><p>Start the backend server:</p>

  ```
  npm run backend
  ```
  </p></li>
  <li><p>In another terminal, start the frontend:</p>

  ```
  npm run dev
  ```
  </p></li>
  <li><p>Open the website in your browser:</p>

  ```
  http://localhost:3000
  ```
  </p></li>
</ol>

<h3>Important notes</h3>

<ul>
  <li>The backend automatically seeds demo categories, products, and merchant data on startup.</li>
  <li>Use the Google OAuth redirect URL: <code>http://localhost:3000/api/auth/callback/google</code></li>
</ul>

<h3>Example root environment values</h3>

```
NODE_ENV=development
NEXTAUTH_URL=http://localhost:3000
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001
FRONTEND_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
NEXTAUTH_SECRET=your-nextauth-secret
DATABASE_URL="mysql://USERNAME:PASSWORD@localhost:3306/lakmal_computer_shop?sslmode=disabled"
MAIL_USERNAME=your-mail-username
MAIL_PASSWORD=your-mail-password
PAYHEAR_MERCHANT_ID=your-payhear-merchant-id
PAYHEAR_MERCHANT_SECRET=your-payhear-merchant-secret
```

<h3>Example server environment values</h3>

```
NODE_ENV=development
NEXTAUTH_URL=http://localhost:3000
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001
FRONTEND_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
NEXTAUTH_SECRET=your-nextauth-secret
DATABASE_URL="mysql://USERNAME:PASSWORD@localhost:3306/lakmal_computer_shop?sslmode=disabled"
MAIL_USERNAME=your-mail-username
MAIL_PASSWORD=your-mail-password
PAYHEAR_MERCHANT_ID=your-payhear-merchant-id
PAYHEAR_MERCHANT_SECRET=your-payhear-merchant-secret
```

<h2>Production deployment guide</h2>

<p>This project can run locally with <code>.env</code> and <code>server/.env</code>, and live with Vercel frontend + Hugging Face backend + hosted MySQL.</p>

<h3>1. Local development</h3>
<ol>
  <li>Copy <code>.env.example</code> to <code>.env</code> and update values.</li>
  <li>Copy <code>server/.env.example</code> to <code>server/.env</code> and update values.</li>
  <li>Install frontend dependencies in the root:
    <pre><code>npm install</code></pre>
  </li>
  <li>Install backend dependencies in the server folder:
    <pre><code>cd server
npm install</code></pre>
  </li>
  <li>Create or connect a local MySQL database named <code>lakmal_computer_shop</code>.</li>
  <li>Run Prisma push from the project root:
    <pre><code>npx prisma db push</code></pre>
  </li>
  <li>Run the backend from the project root:
    <pre><code>npm run backend</code></pre>
  </li>
  <li>Start the frontend from the project root:
    <pre><code>npm run dev</code></pre>
  </li>
  <li>Open <code>http://localhost:3000</code> in your browser.</li>
</ol>

<h3>2. Frontend hosting on Vercel</h3>
<p>Deploy the Next.js frontend from this project folder. If your repository contains the actual app in the <code>Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS-main</code> directory, choose that folder as the Vercel root when importing.</p>
<ol>
  <li>Sign in to <a href="https://vercel.com">vercel.com</a> and click <strong>New Project</strong>.</li>
  <li>Import the GitHub repository and choose the correct folder. If the app is inside <code>Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS-main</code>, set Root Directory to that path.</li>
  <li>Set the build command to <code>npm run build</code> and the output directory to <code>.next</code>.</li>
  <li>Go to <strong>Settings → Environment Variables</strong> and add the variables shown below.</li>
  <li>Save the values and deploy the project.</li>
</ol>

<h4>How to add environment variables in Vercel</h4>
<ol>
  <li>Open the project on Vercel.</li>
  <li>Click <strong>Settings</strong> → <strong>Environment Variables</strong>.</li>
  <li>Click <strong>Add</strong>, enter the <strong>Name</strong> and <strong>Value</strong>.</li>
  <li>Choose the environment: <strong>Production</strong> and, if needed, <strong>Preview</strong>.</li>
  <li>Repeat for each variable, then redeploy the project.</li>
</ol>

<h3>3. Backend hosting on Hugging Face Spaces</h3>
<p>Use a custom Docker Space to run the backend from the <code>server/</code> folder. This app already listens on <code>process.env.PORT</code>, so Hugging Face will assign the port automatically.</p>
<ol>
  <li>Go to <a href="https://huggingface.co/spaces">huggingface.co/spaces</a> and click <strong>Create new Space</strong>.</li>
  <li>Select <strong>Custom Docker</strong> and choose <strong>CPU Basic</strong> for a free option.</li>
  <li>Push the backend files to the Space repository. The repository should include at least:
    <ul>
      <li><code>server/</code> folder</li>
      <li><code>prisma/</code> folder</li>
      <li><code>server/package.json</code></li>
      <li><code>server/.env.example</code></li>
      <li><code>server/Dockerfile</code></li>
    </ul>
  </li>
  <li>In the Space settings, add the production environment variables with the same names used in this project.</li>
  <li>After the Space is deployed, copy the backend URL (for example, <code>https://your-space-name.hf.space</code>).</li>
  <li>Set <code>NEXT_PUBLIC_API_BASE_URL</code> on Vercel to the Hugging Face backend URL.</li>
</ol>

<h3>4. Database hosting options</h3>
<p>Use a hosted MySQL-compatible database so both the frontend and backend can connect from the cloud. Local <code>localhost</code> databases will not work for live deployment.</p>
<p>Good free options:</p>
<ul>
  <li>PlanetScale MySQL</li>
  <li>Neon MySQL</li>
  <li>Supabase MySQL</li>
  <li>Railway MySQL</li>
</ul>
<ol>
  <li>Create the hosted database and a database user.</li>
  <li>Copy the provider connection string.</li>
  <li>Set <code>DATABASE_URL</code> on Vercel and in the Hugging Face backend environment to that connection string.</li>
</ol>

<h3>5. Production environment variables</h3>
<p>Use the same names in all environments. Change only the values between local and live hosting.</p>

<pre><code>NEXTAUTH_URL=https://your-frontend.vercel.app
NEXT_PUBLIC_API_BASE_URL=https://your-backend.hf.space
FRONTEND_URL=https://your-frontend.vercel.app
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
NEXTAUTH_SECRET=your-nextauth-secret
DATABASE_URL="mysql://USERNAME:PASSWORD@HOST:PORT/dbname?sslaccept=strict"
MAIL_USERNAME=your-mail-username
MAIL_PASSWORD=your-mail-password
PAYHEAR_MERCHANT_ID=your-payhear-merchant-id
PAYHEAR_MERCHANT_SECRET=your-payhear-merchant-secret
</code></pre>

<h3>6. Google OAuth</h3>
<p>In Google Cloud Console, set the redirect URI to:</p>

<pre><code>https://your-frontend.vercel.app/api/auth/callback/google</code></pre>

<h3>7. Important notes</h3>
<ul>
  <li>Do not commit real secrets or API keys to GitHub. Keep secrets in <code>.env</code> locally and platform environment variables in production.</li>
  <li><code>NEXT_PUBLIC_API_BASE_URL</code> must point to the backend API URL that the frontend calls.</li>
  <li><code>NEXTAUTH_URL</code> and <code>FRONTEND_URL</code> should match the actual deployed frontend URL.</li>
  <li>If you use Hugging Face as backend, set the same <code>DATABASE_URL</code> there and allow the frontend URL in backend CORS.</li>
</ul>

<p>Local Google OAuth redirect URL: <code>http://localhost:3000/api/auth/callback/google</code></p>

<h2>Project screenshots</h2>

<h3>Home page</h3>

![singitronic home page](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/a48c092d-1f19-4bae-a480-0b5862630e1c)

<h3>Shop page</h3>

![singitronic shop page](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/1133effb-0511-40c6-aee5-119404c5af34)

<h3>Single product page</h3>

![singitronic single product page](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/443ea3e2-4d32-4d15-aa3b-436cbae0eade)

<h3>Register page</h3>

![singitronic register page](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/0052cc90-d61a-4a8c-b8d8-02cee1b45d13)

<h3>Login page</h3>

![singitronic logic page](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/7a377bb3-330f-43a4-860f-400bf7aa0f97)

<h3>Search page</h3>

![singitronic search page](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/384c7f55-16ee-4966-b612-a34f5506af51)

<h3>Wishlist page</h3>

![singitronic wishlist page](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/a20568d6-12fb-42e6-a5ef-583f6e79229a)

<h3>Cart page</h3>

![singitronic cart page](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/b9d326be-342c-4f6a-af64-34794f6c39eb)

<h3>Checkout page</h3>

![singitronic checkout page](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/a458d931-9df2-4e3d-bf3f-702c1a3ba9e9)

<h3>Admin dashboard - All orders page</h3>

![singitronic admin orders page](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/498b07f4-422c-46c5-b2e4-ed2a93306b7a)

<h3>Admin dashboard - All products page</h3>

![singitronic admin products page](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/e26822ab-6c7e-4474-9161-288a5bb3476f)

<h3>Admin dashboard - All categories page<h3>

![singitronic admin categories page](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/9e4a54d7-5bbb-4f1b-bdab-43c1079510e1)

<h3>Admin dashboard - All users page</h3>

![singitronic admin users page](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/e14e8f2c-4377-42fd-b89b-d4868cc11b11)
