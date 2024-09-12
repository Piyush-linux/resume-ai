import { useUser } from '@clerk/clerk-react';
import { Dock, DockIcon } from "@/components/magicui/dock";
import { useNavigate } from 'react-router-dom';
import IconCloud from "@/components/magicui/icon-cloud";
import SparklesText from '@/components/magicui/sparkles-text';

export default function App() {
  const navigate = useNavigate();
  let { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return
  };
  if (isSignedIn) {
    navigate('/dashboard')
  }

  const slugs = [
    "react",
    "git",
    "github",
    "figma",
    "typescript",
    "javascript",
    "html5",
    "css3"
  ]


  return (
    <>
      <div className="h-fit">

        {/* HERO */}
        <div className="w-full mt-24 gap-4">
          <div className="mx-auto w-fit text-white">AI Resume Builder</div>
          <SparklesText text="SeekOut" className="mx-auto text-white w-fit " />;
        </div>
        <div className="relative flex h-full w-full mx-auto max-w-[32rem] items-center justify-center overflow-hidden rounded-lg  bg-transparent px-20 pt-0 ">
          <IconCloud iconSlugs={slugs} className="bg-transparent z-50" />
        </div>
        {/* DOCK */}
        <div className="absolute bottom-10 mx-auto w-full">
          <Dock direction="middle">
            <DockIcon className="hover:text-white">
              <a href="https://github.com/Piyush-linux">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
              </a>
            </DockIcon>
            <DockIcon className="hover:text-white">
              <a href="">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
              </a>
            </DockIcon>
            <DockIcon className="hover:text-white">
              <a href="">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M3.019 12.008c-.032-1.26-.012-2.448-.012-3.442c0-4.338 2.843-5.61 2.843-5.61C7.283 2.298 9.742 2.021 12.3 2h.062c2.557.02 5.018.298 6.451.956c0 0 2.843 1.272 2.843 5.61c0 0 .036 3.201-.396 5.424c-.275 1.41-2.457 2.955-4.963 3.254c-1.306.156-2.593.3-3.965.236c-2.244-.102-4.014-.535-4.014-.535q0 .328.04.62c.084.633.299 1.095.605 1.435c.766.85 2.106.93 3.395.974c1.82.063 3.44-.449 3.44-.449l.075 1.646s-1.273.684-3.54.81c-1.251.068-2.804-.032-4.613-.51c-1.532-.406-2.568-1.29-3.27-2.471c-1.093-1.843-1.368-4.406-1.431-6.992m3.3 4.937v-2.548l2.474.605q.073.018.324.07a22 22 0 0 0 3.307.41c1.019.047 1.9-.017 3.636-.224c1.663-.199 3.148-1.196 3.236-1.65c.082-.422.151-.922.206-1.482c.07-.705.114-1.47.137-2.245c.015-.51.02-.945.017-1.256v-.059c0-1.43-.369-2.438-.963-3.158a3 3 0 0 0-.584-.548c-.09-.064-.135-.089-.13-.087c-1.013-.465-3.093-.752-5.617-.773h-.046c-2.54.02-4.62.308-5.65.782c.023-.01-.021.014-.112.078a3 3 0 0 0-.584.548c-.594.72-.963 1.729-.963 3.158c0 .232 0 .397-.003.875a78 78 0 0 0 .014 2.518c.054 2.197.264 3.835.7 5.041q.318.88.78 1.45a5.7 5.7 0 0 1-.18-1.505M8.085 6.37a1.143 1.143 0 1 1 0 2.287a1.143 1.143 0 0 1 0-2.287" /></svg>
              </a>
            </DockIcon>
            <DockIcon className="hover:text-white">
              <a href="https://piyush-linux.github.io">
                <svg className="w-8 h-8 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><path id="letsIconsSendDuotone0" fill="currentColor" d="m7.692 11.897l1.41.47c.932.31 1.397.466 1.731.8s.49.8.8 1.73l.47 1.41c.784 2.354 1.176 3.53 1.897 3.53c.72 0 1.113-1.176 1.897-3.53l2.838-8.512c.552-1.656.828-2.484.391-2.921s-1.265-.161-2.92.39l-8.515 2.84C5.34 8.887 4.162 9.279 4.162 10s1.177 1.113 3.53 1.897" /></defs><use href="#letsIconsSendDuotone0" fillOpacity="0.25" /><use href="#letsIconsSendDuotone0" fillOpacity="0.25" /><path fill="currentColor" d="m9.526 13.842l-2.062-.687a1 1 0 0 0-.87.116l-1.09.726a.8.8 0 0 0 .25 1.442l1.955.488a.5.5 0 0 1 .364.364l.488 1.955a.8.8 0 0 0 1.442.25l.726-1.09a1 1 0 0 0 .116-.87l-.687-2.062a1 1 0 0 0-.632-.632" /></svg>
              </a>
            </DockIcon>

          </Dock>
        </div>

      </div>
    </>
  )
}