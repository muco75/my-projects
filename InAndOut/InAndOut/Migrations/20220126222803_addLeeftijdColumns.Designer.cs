﻿// <auto-generated />
using InAndOut.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace InAndOut.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20220126222803_addLeeftijdColumns")]
    partial class addLeeftijdColumns
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.0");

            modelBuilder.Entity("InAndOut.Models.item", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Borrwer")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Klantadres")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Leeftijd")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("Ttems");
                });
#pragma warning restore 612, 618
        }
    }
}
