# Smart CV

> Blossom into Your Dream Career.

__Key Features:__
- AI-Powered Personalization: Tailor your resume effortlessly with AI-driven suggestions, ensuring your skills and experience stand out.
- Elegant Design : Crafted with React.js and Tailwind CSS, the interface is as graceful as sakura petals, offering a beautiful, user-friendly experience.
- Seamless Authentication: Secure login with Clerk, providing peace of mind as you create and manage your resumes.
- Robust Backend: Powered by Strapi CMS, the backend is flexible and powerful, ensuring smooth integration and data management.
- Instant Download & Sharing: Generate, download, and share your resume in just a few clicks, making job applications a breeze.

## Task
- [ ] Toast 
- [ ] New CV Templates
- [ ] Pic Upload Option
- [ ] CV CreatedOn 
    - [ ] https://www.pinterest.com/pin/492649950141865/
    - [ ] https://www.pinterest.com/pin/289848926037524746/
    - [ ] https://www.pinterest.com/pin/23503229299428390/ 
    - [ ] https://www.pinterest.com/pin/cv-ilustracin-y-diseo-on-behance--609745237063037086/ 
    - [ ] https://www.pinterest.com/pin/282389839129606118/
- [ ] Social Media Linking



## Backend 

### Strapi 
```
yarn
yarn develop
# vercel postgres DB
piyush123@gmail.com
piyush123
```

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


- vite setup react
- add shadcn usign vite & jsconfig setup & vite.config.js

```
>>>  resume-ai npx shadcn-ui@latest init
✔ Would you like to use TypeScript (recommended)? … no 
✔ Which style would you like to use? › Default
✔ Which color would you like to use as base color? › Neutral
✔ Where is your global CSS file? … src/index.css
✔ Would you like to use CSS variables for colors? …  yes
✔ Are you using a custom tailwind prefix eg. tw-? (Leave blank if not) …
✔ Where is your tailwind.config.js located? … tailwind.config.js
✔ Configure the import alias for components: … @/components
✔ Configure the import alias for utils: … @/lib/utils
✔ Are you using React Server Components? … no 
✔ Write configuration to components.json. Proceed? … yes
```

- lucid icon
- Logo : 
    - logo_ipsum https://logoipsum.com/
    - Generator : https://app.brandmark.io/v3/

## tailwind


```sh
# scale out animation
hover:scale-105 transition-all hover:shadow-xl
# Layout
grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
```

- https://www.npmjs.com/package/react-toastify

## API

```
http://localhost:1337/api/resumes?populate=*

```

# Learning
- use import statement wisely
- rearrange if require
```
import useState
import uuid
```

- using axios for backend req through Client(Frontend)
- put outside /src
- import whole Module not just single enitity
    - NO: `import { sample } from ../../service/api.js`
    - YES: `import API from ../../service/api.js; API.CreateReq(...)`
- useState if you want to store Array
    - NO: `resume = useState('');  resume.map([...])`
    - YES: `resume = useSTate([]); `
- use `useEffect` if you want to fetch something on landing to that page `eg: dashboard, gallery`
- animate Spin: `<LoaderCircle className='animate-spin' />`
- Strapi Ref: https://docs.strapi.io/dev-docs/api/rest
- useContaext
    - state name same throughtout 
    - Provider pass throughtout by wrapping
    - `[data, setData] = useState(); <Provider value={{data, setData}}>`
    - `let {data, setData} = useContext(context)`
