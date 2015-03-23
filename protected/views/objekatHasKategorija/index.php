<?php
/* @var $this ObjekatHasKategorijaController */
/* @var $dataProvider CActiveDataProvider */

$this->breadcrumbs=array(
	'Objekat Has Kategorijas',
);

$this->menu=array(
	array('label'=>'Create ObjekatHasKategorija', 'url'=>array('create')),
	array('label'=>'Manage ObjekatHasKategorija', 'url'=>array('admin')),
);
?>

<h1>Objekat Has Kategorijas</h1>

<?php $this->widget('zii.widgets.CListView', array(
	'dataProvider'=>$dataProvider,
	'itemView'=>'_view',
)); ?>
