<?xml version="1.0" ?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:template match="/">
        <table id="partTable" border="1" class="indent">
            <thead>
                <tr>
                    <th colspan="4">Car Parts Avaliable</th>
                </tr>
                <tr>
                    <th>Select</th>
                    <th> Model </th> 
                    <th>Part</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <xsl:for-each select="/partsmenu/section">
                    <tr>
                        <td colspan="3">
                            <xsl:value-of select="@name" />
                        </td>
                    </tr>

                    <xsl:for-each select="entree">
                        
                        <tr id="{position()}">
                      

                            <td align="center">
                                <input name="item0" type="checkbox" />
                            </td>

                               <td>
                                <xsl:value-of select="model" />
                            </td>


                            <td>
                                <xsl:value-of select="part" />
                            </td>
                            <td align="right">
                                <xsl:value-of select="price" />
                            </td>
                        </tr>
                    </xsl:for-each>
                </xsl:for-each>
            </tbody>
        </table>
    </xsl:template>
</xsl:stylesheet>