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
        destination: "https://drive.google.com/file/d/1I5ZFxc1wKfJIN8JRd-9YV2HmfQkOblrr/view",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
