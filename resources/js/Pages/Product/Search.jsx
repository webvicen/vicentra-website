import { Helmet } from "react-helmet";

import Layout from "../../Layouts/PagesLayout";

const Search = ({ keyword }) => {
    return (
        <div>
            <Helmet>
                <title>
                    Vicentra - Cari{" "}
                    {keyword.replace(/\b\w/g, (char) => char.toUpperCase())}
                </title>
            </Helmet>

            {/* SEARCHING SECTION */}
            <section>
                <h1 className="text-xl text-center capitalize font-semibold text-gray-800">
                    Cari {keyword}
                </h1>
            </section>
            {/* SEARCHING SECTION */}
        </div>
    );
};

Search.layout = (page) => <Layout children={page} />;

export default Search;
