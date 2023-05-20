{
  test: /\.css$/;
  use: [
    "style-loader",
    {
      loader: "css-loader",
      options: {
        modules: true, // asegurarse de que esta opción esté habilitada
      },
    },
  ];
}
