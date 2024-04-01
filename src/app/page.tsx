import { Suspense } from 'react'

import { GithubProfile } from '@/components/GithubProfile'
import { LongWaitComponent } from '@/components/LongWaitComponent'

export default function Home() {
  return (
    <div>
      <h1>Home</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        itaque ab rerum laboriosam unde quasi amet repellat rem, accusamus
        dolores voluptatem at obcaecati eius adipisci sunt fuga consequatur
        officiis cupiditate.
      </p>

      <Suspense fallback={<p>Carregando LongWaitComponent</p>}>
        <LongWaitComponent />
      </Suspense>

      <Suspense fallback={<p>Carregando GithubProfile</p>}>
        <GithubProfile />
      </Suspense>
    </div>
  )
}
