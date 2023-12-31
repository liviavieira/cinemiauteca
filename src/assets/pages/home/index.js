import React, { lazy, Suspense } from "react";

//Styles
import * as S from "./styles";

//Components
const Layout = lazy(() => import("../../../components/Layout"));
const MoviesAndShows = lazy(() => import("../../../components/Movie and Show"));
const Genres = lazy(() => import("../../../components/Movie and Show/genres"));

export default function Home() {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Layout>
                    <S.Header>
                        <Suspense fallback={<div>Loading...</div>}>
                            <MoviesAndShows typeOfComponent={"movies"} apiType={"movie/popular"} />
                        </Suspense>
                    </S.Header>
                    <main>
                        <Suspense fallback={<div>Loading...</div>}>
                            <MoviesAndShows typeOfComponent={"shows"} apiType={"tv/top_rated"} />
                        </Suspense>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Genres />
                        </Suspense>
                    </main>
                </Layout>
            </Suspense>
        </>
    );
}
