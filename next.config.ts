import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   async redirects() {
    return [
      {
        source: "/aftermovie",
        destination: "https://www.youtube.com/watch?v=xKLlWAJvdDQ",
        permanent: false,
      },
      {
        source: "/prospectus",
        destination:
          "https://drive.google.com/file/d/1I5ZFxc1wKfJIN8JRd-9YV2HmfQkOblrr/view",
        permanent: false,
      },
      {
        source: "/chat",
        destination:
          "https://discord.com/invite/NTueHjdPn8",
        permanent: false,
      },
      {
        source: "/stdb",
        destination:
          "https://docs.google.com/document/d/19Vb6-k2Ue5xG6nN9nktWUaN5xXkLZRIp-hjFoAyuH8w/edit?usp=sharing",
        permanent: false,
      },
      {
        source: "/rovo",
        destination:
          "https://docs.google.com/document/d/15sBmYcxLwRdxDpXuqXzJyrfD1fCdKl1EUoIBUoPow-I/edit?usp=sharing",
        permanent: false,
      },
      {
        source: "/superplane",
        destination:
          "https://docs.google.com/document/d/141s4utWJOrSl40FPtqbYwcF3VbmuQ4ccCI9djJLHt7A/edit?usp=sharing",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
